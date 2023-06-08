import { hash } from 'bcryptjs'
import { Organization } from '@prisma/client'

import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { OrganizationNotFoundError } from '../errors/organization-not-found-error'

interface UpdateUseCaseRequest {
  id: string
  name: string
  email: string
  password_hash: string
  phone: string
  city: string
  address: string
  address_number: number
  zip_code: number
  state: string
}

interface UpdateUseCaseResponse {
  organization: Organization
}

export class UpdatedUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    id,
    name,
    email,
    password_hash,
    phone,
    city,
    address,
    address_number,
    zip_code,
    state,
  }: UpdateUseCaseRequest): Promise<UpdateUseCaseResponse> {
    const organization = await this.organizationsRepository.findById(id)

    if (!organization) {
      throw new OrganizationNotFoundError
    }

    const passwordHash = await hash(password_hash, 6)

    await this.organizationsRepository.updated({
      id,
      name,
      email,
      password_hash: passwordHash,
      phone,
      city,
      address,
      address_number,
      zip_code,
      state,
    })

    return { organization }
  }
}