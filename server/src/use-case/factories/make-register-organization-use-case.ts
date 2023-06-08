import { RegisterUseCase } from '../organizations/register-use-case'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeRegisterOrganizationUseCase() {
  const prismaOrganizationsRepository = new PrismaOrganizationsRepository()
  const registerOrganizationsUseCase = new RegisterUseCase(prismaOrganizationsRepository)

  return registerOrganizationsUseCase
}
