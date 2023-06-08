import { hash } from 'bcryptjs'
import { Organization } from '@prisma/client'

import { OrganizationsRepository } from '@/repositories/organizations-repository'
import { OrganizationEmailExistsError } from '../errors/organization-email-exists-error'

interface RegisterUseCaseRequest {
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

interface RegisterUseCaseResponse {
  organization: Organization
}

export class RegisterUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    name,
    email,
    password_hash,
    phone,
    city,
    address,
    address_number,
    zip_code,
    state
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const emailAlreadyExists = await this.organizationsRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new OrganizationEmailExistsError()
    }

    const passwordHash = await hash(password_hash, 6)

    const organization = await this.organizationsRepository.create({
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
