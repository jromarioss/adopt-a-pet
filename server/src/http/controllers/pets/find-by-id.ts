import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindPetByIdUseCase } from '@/use-case/factories/make-find-pet-by-id-use-case'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const findParamsSchema = z.object({
    id: z.string()
  })

  const { id } = findParamsSchema.parse(request.params)

  const getPetByIdUseCase = makeFindPetByIdUseCase()

  const { pet } = await getPetByIdUseCase.execute({ id })

  return reply.status(200).send({ pet })
}
