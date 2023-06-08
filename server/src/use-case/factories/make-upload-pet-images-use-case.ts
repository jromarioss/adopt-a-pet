import { UploadImagesUseCase } from '../pets/upload-images-use-case'
import { PrismaPetsImagesRepository } from '@/repositories/prisma/prisma-pets-images-repository'

export function makeUploadPetImagesUseCase() {
  const prismaPetsImagesRepository = new PrismaPetsImagesRepository()
  const petsImagesUseCase = new UploadImagesUseCase(prismaPetsImagesRepository)

  return petsImagesUseCase
}