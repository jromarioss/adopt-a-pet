import { z } from 'zod'
import { Age } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFetchPetsUseCase } from '@/use-case/factories/make-fetch-pets-use-case'

export async function fetchAllPets(request: FastifyRequest, reply: FastifyReply) {
  const fetchPetsQuerySchema = z.object({
    city: z.string().optional(),
    age: z.nativeEnum(Age).optional(),
    castrated: z.boolean().optional(),
  })

  const { city, age, castrated } = fetchPetsQuerySchema.parse(request.query)

  const queryParams = { city, age, castrated }

  const fetchPetsUseCase = makeFetchPetsUseCase()

  const { pets } = await fetchPetsUseCase.execute({ query: queryParams})

  return reply.status(200).send({ pets })
}