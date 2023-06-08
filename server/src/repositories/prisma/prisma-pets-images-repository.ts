import { Prisma, PetImages } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { PetsImagesRepository } from '../pets-images-repository'

export class PrismaPetsImagesRepository implements PetsImagesRepository {
  async create(data: Prisma.PetImagesUncheckedCreateInput) {
    const petImages = await prisma.petImages.create({ data })

    return petImages
  }

  async findById(id: string) {
    const petImages = await prisma.petImages.findMany({
      where: { 
        id 
      }
    })

    return petImages
  }

  async delete(id: string) {
    await prisma.petImages.deleteMany({
      where: { 
        id 
      }
    })
  }
}
