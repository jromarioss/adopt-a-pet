import { UpdatedUseCase } from '../organizations/updated-use-case'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeUpdatedOrganizationUseCase() {
  const prismaOrganizationsRepository = new PrismaOrganizationsRepository()
  const updateOrganizationUseCase = new UpdatedUseCase(prismaOrganizationsRepository)

  return updateOrganizationUseCase
}
