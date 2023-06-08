import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { OrganizationEmailExistsError } from '@/use-case/errors/organization-email-exists-error'
import { makeUpdatedOrganizationUseCase } from '@/use-case/factories/make-update-organizations-use-case'

export async function updated(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  })

  const { id } = paramsSchema.parse(request.params)

  if (!id) {
    return reply.status(401).send()
  }

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

  const updatedOrganizationUseCase = makeUpdatedOrganizationUseCase()

  try {
    await updatedOrganizationUseCase.execute({
      id,
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

    return reply.status(200).send({
      message: 'User updated successfully.'
    })

  } catch(error) {
    if(error instanceof OrganizationEmailExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }
}
