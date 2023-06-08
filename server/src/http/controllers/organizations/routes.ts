import { FastifyInstance } from 'fastify'

import { updated } from './updated'
import { profile } from './profile'
import { register } from './register'
import { authenticate } from './authenticate'
import { refreshToken } from './refresh-token'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function organizationsRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/sessions', authenticate)
  
  app.get('/profile/:id', { onRequest: [verifyJWT]}, profile)
  app.patch('/update/:id', { onRequest: [verifyJWT]}, updated)
  app.patch('/token/refresh', { onRequest: [verifyJWT]}, refreshToken)
}
