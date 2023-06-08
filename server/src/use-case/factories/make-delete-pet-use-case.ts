import { DeleteUseCase } from '../pets/delete-use-case'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeDeletePetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const deletePetUseCase = new DeleteUseCase(prismaPetsRepository)

  return deletePetUseCase
}