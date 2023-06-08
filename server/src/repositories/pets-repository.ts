import { Age, Pet, Prisma } from '@prisma/client'

export interface SearchPetsQuery {
  city?: string
  age?: Age | undefined
  castrated?: boolean | undefined
}

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findById(id: string): Promise<Pet | null>
  searchPets(query: SearchPetsQuery): Promise<Pet[]>
  delete(id: string): Promise<void>
}
