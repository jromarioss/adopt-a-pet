import { PetImages, Prisma } from '@prisma/client'

export interface PetsImagesRepository {
  create(data: Prisma.PetImagesUncheckedCreateInput): Promise<PetImages>
  findById(id: string): Promise<PetImages[]>
  delete(id: string): Promise<void>
}
