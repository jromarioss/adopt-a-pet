import { FindByIdUseCase } from '../pets/find-by-id-use-case'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeFindPetByIdUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const findPetByIdUseCase = new FindByIdUseCase(prismaPetsRepository)

  return findPetByIdUseCase
}
