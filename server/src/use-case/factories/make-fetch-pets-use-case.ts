import { FetchPetsUseCase } from '../pets/fetch-pets-use-case'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeFetchPetsUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const fetchPetsUseCase = new FetchPetsUseCase(prismaPetsRepository)

  return fetchPetsUseCase
}