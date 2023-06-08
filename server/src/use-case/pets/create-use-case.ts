import { Pet, Age } from '@prisma/client'

import { PetsRepository } from '@/repositories/pets-repository'
import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { OrganizationNotFoundError } from '../errors/organization-not-found-error'

interface CreateUseCaseRequest {
  organization_id: string
  name: string
  city: string
  description: string
  age: Age
  castrated: boolean
}

interface CreateUseCaseResponse {
  pet: Pet
}

export class CreateUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private organizationsRepository: OrganizationsRepository
  ) {}

  async execute({
    organization_id, name, city, description, age, castrated
  }: CreateUseCaseRequest): Promise<CreateUseCaseResponse> {
    const organization = await this.organizationsRepository.findById(organization_id)

    if (!organization) {
      throw new OrganizationNotFoundError()
    }

    const pet = await this.petsRepository.create({
      organization_id: organization.id,
      name,
      city,
      description,
      age,
      castrated
    })

    return { pet }
  }
}