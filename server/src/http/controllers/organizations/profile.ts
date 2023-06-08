import { FastifyRequest, FastifyReply } from 'fastify'

import { makeProfileUseCase } from '@/use-case/factories/make-profile-use-case'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeProfileUseCase()

  console.log('id user', request.user.sub)

  const { organization } = await getUserProfile.execute({
    id: request.user.sub
  })

  return reply.status(200).send({
    user: {
      ...organization,
      password_hash: undefined
    }
  })
}