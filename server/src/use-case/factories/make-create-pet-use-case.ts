import { CreateUseCase } from '../pets/create-use-case'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeCreatePetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const prismaOrganizationsRepository = new PrismaOrganizationsRepository()
  const createPetsUseCase = new CreateUseCase(prismaPetsRepository, prismaOrganizationsRepository)

  return createPetsUseCase
}
