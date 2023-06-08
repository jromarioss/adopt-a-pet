import { AuthenticateUseCase } from '../organizations/authenticate-use-case'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeAuthenticateOrganizationUseCase() {
  const prismaOrganizationRepository = new PrismaOrganizationsRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismaOrganizationRepository)

  return authenticateUseCase
}
