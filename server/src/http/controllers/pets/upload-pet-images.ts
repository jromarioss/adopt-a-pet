import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeUploadPetImagesUseCase } from '@/use-case/factories/make-upload-pet-images-use-case'

interface IFiles {
  filename: string
}

export async function uploadPetImages(request: FastifyRequest, reply: FastifyReply) {
  const uploadParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = uploadParamsSchema.parse(request.params)

  const images = request.files as IFiles[]

  const uploadPetImagesUseCase = makeUploadPetImagesUseCase()

  const fileNames = images.map(file => file.filename)

  uploadPetImagesUseCase.execute({ id, imagesName: fileNames })

  return reply.status(201).send({ fileNames })
}