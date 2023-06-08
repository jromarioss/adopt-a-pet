import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeRegisterOrganizationUseCase } from '@/use-case/factories/make-register-organization-use-case'
import { OrganizationEmailExistsError } from '@/use-case/errors/organization-email-exists-error'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerOrganizationBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password_hash: z.string().min(6),
    phone: z.string(),
    city: z.string(),
    address: z.string(),
    address_number: z.coerce.number(),
    zip_code: z.coerce.number(),
    state: z.string().min(2).max(2)
  })

  const {
    name,
    email,
    password_hash,
    phone,
    city,
    address,
    address_number,
    zip_code,
    state
  } = registerOrganizationBodySchema.parse(request.body)

  try {
    const registerOrganizationUseCase = makeRegisterOrganizationUseCase()

    await registerOrganizationUseCase.execute({
      name,
      email,
      password_hash,
      phone,
      city,
      address,
      address_number,
      zip_code,
      state
    })

    return reply.status(201).send()
  } catch(error) {
    if(error instanceof OrganizationEmailExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }
}
