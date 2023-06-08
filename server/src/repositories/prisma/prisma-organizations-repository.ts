import { Prisma, Organization } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { OrganizationsRepository, DataDTO } from '../organizations-repository'

export class PrismaOrganizationsRepository implements OrganizationsRepository {
  async create(data: Prisma.OrganizationCreateInput) {
    const organization = await prisma.organization.create({ data })

    return organization
  }

  async findByEmail(email: string) {
    const organization = await prisma.organization.findUnique({
      where: { email }
    })

    return organization
  }

  async findById(id: string) {
    const organization = await prisma.organization.findUnique({
      where: {
        id,
      }
    })

    return organization
  }

  async updated(data: DataDTO) {
    const organization = await prisma.organization.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        phone: data.phone,
        city: data.city,
        address: data.address, 
        address_number: data.address_number,
        zip_code: data.zip_code,
        state: data.state,
        updated_at: new Date()
      }
    })

    return organization
  }
}
