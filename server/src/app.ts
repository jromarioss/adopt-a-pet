import fastify from 'fastify'
import cors from '@fastify/cors'
import multer from 'fastify-multer'
import { resolve } from 'node:path'
import fastifyCookie from '@fastify/cookie'

import { ZodError } from 'zod'
import { fastifyJwt } from '@fastify/jwt'

import { env } from './env'
import { petsRoutes } from './http/controllers/pets/routes'
import { organizationsRoutes } from './http/controllers/organizations/routes'

export const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '1d'
  }
})

app.register(fastifyCookie)

app.register(multer.contentParser)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../tmp'),
  prefix: '/uploads',
})

app.register(organizationsRoutes)
app.register(petsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format()
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  }else {
    
  }

  return reply.status(500).send({
    message: 'Internal server error.'
  })
})
