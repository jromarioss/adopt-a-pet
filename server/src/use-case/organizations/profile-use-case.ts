import { Organization } from '@prisma/client'

import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { OrganizationNotFoundError } from '../errors/organization-not-found-error'

interface ProfileUseCaseRequest {
  id: string
}

interface ProfileUseCaseResponse {
  organization: Organization
}

export class ProfileUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({ id }: ProfileUseCaseRequest): Promise<ProfileUseCaseResponse> {
    const organization = await this.organizationsRepository.findById(id)

    if (!organization) {
      throw new OrganizationNotFoundError()
    }

    return { organization }
  }
}