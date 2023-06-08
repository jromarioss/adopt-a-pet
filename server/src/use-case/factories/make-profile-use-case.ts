import { ProfileUseCase } from '../organizations/profile-use-case'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeProfileUseCase() {
  const prismaOrganizationsRepository = new PrismaOrganizationsRepository()
  const getOrganizationUseCase = new ProfileUseCase(prismaOrganizationsRepository)

  return getOrganizationUseCase
}
