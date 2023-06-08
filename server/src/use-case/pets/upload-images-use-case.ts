import { PetsImagesRepository } from '@/repositories/pets-images-repository'

interface UploadImagesUseCaseRequest {
  id: string
  imagesName: string[]
}

export class UploadImagesUseCase {
  constructor(
    private petsImagesRepository: PetsImagesRepository,
  ) {}

  async execute({ id, imagesName }: UploadImagesUseCaseRequest): Promise<void> {
    imagesName.map(async image => {
      await this.petsImagesRepository.create({
        pet_id: id,
        image_name: image
      })
    })
  }
}
