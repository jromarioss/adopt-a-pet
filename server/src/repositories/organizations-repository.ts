import { Organization, Prisma } from '@prisma/client'

export interface DataDTO {
  id?: string
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

export interface OrganizationsRepository {
  create(data: Prisma.OrganizationCreateInput): Promise<Organization>
  findByEmail(email: string): Promise<Organization | null>
  findById(id: string): Promise<Organization | null>
  updated(data: DataDTO): Promise<Organization>
}
