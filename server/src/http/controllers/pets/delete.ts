import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

import { makeDeletePetUseCase } from '@/use-case/factories/make-delete-pet-use-case'

export async function deletePet(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteParamsSchema.parse(request.params)

  const deletePetUseCase = makeDeletePetUseCase()

  await deletePetUseCase.execute({
    id
  })

  return reply.status(202).send({ message: 'Successfully deleted pet.' })
}