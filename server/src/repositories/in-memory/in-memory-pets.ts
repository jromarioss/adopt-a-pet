import { randomUUID } from 'crypto'
import { Prisma, Pet } from '@prisma/client'

import { PetsRepository, SearchPetsQuery } from '../pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      organization_id: data.organization_id,
      name: data.name,
      city: data.city,
      description: data.description,
      age: data.age,
      castrated: data.castrated,
      pet_images: data.pet_images,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(pet)

    return pet
  }

  async findById(id: string) {
    const pet = this.items.find(item => item.id === id)

    if (!pet) {
      return null
    }

    return pet
  }

  async searchPets(query: SearchPetsQuery) {
    let filterPets = this.items.filter(item => item.city === query.city)

    if (query.age) {
      filterPets = filterPets.filter(item => item.age === query.age)
    }

    if (query.castrated === true) {
      filterPets = filterPets.filter(item => item.castrated === query.castrated)
    }

    if (query.castrated === false) {
      filterPets = filterPets.filter(item => item.castrated === query.castrated)
    }
    
    return filterPets
  }

  async delete(id: string) {
    const findIndex = this.items.findIndex(item => item.id === id)

    if (findIndex >= 0) {
      this.items.splice(findIndex, 1)
    }
  }
}