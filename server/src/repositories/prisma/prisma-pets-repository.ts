import { Pet, Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { PetsRepository, SearchPetsQuery } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({ data })

    return pet
  }

  async findById(id: string) {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      }
    })

    return pet
  }

  async searchPets(query: SearchPetsQuery) {
    const pets = await prisma.pet.findMany({
      where: {
        city: query.city,
        age: query.age,
        castrated: query.castrated
      }
    })

    return pets
  }

  async delete(id: string) {
    await prisma.pet.delete({
      where: {
        id,
      },
    })
  }
}