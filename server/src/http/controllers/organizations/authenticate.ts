import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeAuthenticateOrganizationUseCase } from '@/use-case/factories/make-authenticate-organization-use-case'
import { InvalidCredentialsError } from '@/use-case/errors/invalid-credentials-error'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateUseCase = makeAuthenticateOrganizationUseCase()

    const { organization } = await authenticateUseCase.execute({
      email, password
    })

    const token = await reply.jwtSign({}, {
      sign: {
        sub: organization.id
      }
    })

    const refreshToken = await reply.jwtSign({}, {
      sign: {
        sub: organization.id,
        expiresIn: '1d',
      }
    })

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({ token })
  } catch(error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
