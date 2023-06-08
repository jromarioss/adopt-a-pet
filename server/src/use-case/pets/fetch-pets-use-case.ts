import { Pet } from '@prisma/client'
import { SearchPetsQuery, PetsRepository } from '@/repositories/pets-repository'

interface FetchPetsUseCaseRequest {
  query: SearchPetsQuery
}

interface FetchPetsUseCaseResponse {
  pets: Pet[]
}

export class FetchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({ query }: FetchPetsUseCaseRequest): Promise<FetchPetsUseCaseResponse> {
    const pets = await this.petsRepository.searchPets(query)

    return { pets }
  }
}