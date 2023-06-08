import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeCreatePetUseCase } from '@/use-case/factories/make-create-pet-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    description: z.string(),
    age: z.enum(['FILHOTE', 'JOVEM', 'ADULTO', 'VELHO']),
    castrated: z.boolean(),
  })

  const { name, city, description, age, castrated } = createBodySchema.parse(request.body)

  const createPetUseCase = makeCreatePetUseCase()

  const { pet } = await createPetUseCase.execute({
    organization_id: request.user.sub,
    name,
    city,
    description,
    age,
    castrated,
  })

  return reply.status(201).send({ pet })
}
