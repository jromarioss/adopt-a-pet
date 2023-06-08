import { PetsRepository } from '@/repositories/pets-repository'
import { PetNotFoundError } from '../errors/pet-not-found-error'

interface DeleteUseCaseRequest {
  id: string
}

interface DeleteUseCaseResponse {}

export class DeleteUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({ id }: DeleteUseCaseRequest): Promise<void> {
    const pet = this.petsRepository.findById(id)

    if (!pet) {
      throw new PetNotFoundError()
    }

    await this.petsRepository.delete(id)
  }
}