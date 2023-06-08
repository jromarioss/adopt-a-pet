import { randomUUID } from 'crypto'
import { Prisma, Organization } from '@prisma/client'

import { OrganizationsRepository } from '../organizations-repository'

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  public items: Organization[] = []

  async create(data: Prisma.OrganizationCreateInput) {
    const organization = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      phone: data.phone,
      city: data.city,
      address: data.address,
      address_number: data.address_number,
      zip_code: data.zip_code,
      state: data.state,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(organization)

    return organization
  }

  async findByEmail(email: string) {
    const organization = this.items.find(item => item.email === email)

    if (!organization) {
      return null
    }

    return organization
  }

  async findById(id: string) {
    const organization = this.items.find(item => item.id === id)

    if (!organization) {
      return null
    }

    return organization
  }

  async updated(organization: Organization) {
    const organizationIndex = this.items.findIndex(item => item.id === organization.id)

    if (organizationIndex >= 0) {
      this.items[organizationIndex] = {
        id: organization.id!,
        name: organization.name,
        email: organization.email,
        password_hash: organization.password_hash,
        phone: organization.phone,
        city: organization.city,
        address: organization.address,
        address_number: organization.address_number,
        zip_code: organization.zip_code,
        state: organization.state,
        created_at: new Date(),
        updated_at: new Date(),
      }
    }

    return organization
  }
}