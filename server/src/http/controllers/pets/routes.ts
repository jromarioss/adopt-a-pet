import multer from 'fastify-multer'
import { FastifyInstance } from 'fastify'

import uploadConfig from '@/config/upload'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { create } from './create'
import { deletePet } from './delete'
import { findById } from './find-by-id'
import { fetchAllPets } from './fetch-all-pets'
import { uploadPetImages } from './upload-pet-images'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', fetchAllPets)
  app.get('/pet/:id', findById)
  
  const upload = multer({ storage: uploadConfig.storage})

  app.post('/create', { preHandler: [verifyJWT]}, create)
  app.post(
      '/pet/upload/:id',
      { preHandler: [verifyJWT, upload.array('images')]},
      uploadPetImages
    )
  app.delete('/pet/:id', { preHandler: [verifyJWT]}, deletePet)
}
