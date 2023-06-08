import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'

import { AuthenticateUseCase } from './authenticate-use-case'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations'

let organizationsRepository: InMemoryOrganizationsRepository;
let sut: AuthenticateUseCase

describe('Authenticate Organization Use Case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new AuthenticateUseCase(organizationsRepository)
  })

  it('should be able to authenticate', async () => {
    await organizationsRepository.create({
      name: 'teste',
      email: 'teste@email.com',
      password_hash: await hash('teste123', 6),
      phone: '15 99823-2345',
      city: 'Testelandia',
      address: 'Rua: Testando',
      address_number: 123,
      zip_code: 18520283,
      state: 'SP'
    })

    const { organization } = await sut.execute({
      email: 'teste@email.com',
      password: 'teste123',
    })

    expect(organization.id).toEqual(expect.any(String))
  })

  it('should not able to authenticate with wrong email', async () => {
    await expect(() => 
      sut.execute({
        email: 'teste@email.com',
        password: 'teste122',
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not able to authenticate with wrong password', async () => {
    await organizationsRepository.create({
      name: 'teste',
      email: 'teste@email.com',
      password_hash: await hash('teste123', 6),
      phone: '15 99823-2345',
      city: 'Testelandia',
      address: 'Rua: Testando',
      address_number: 123,
      zip_code: 18520283,
      state: 'SP'
    })

    await expect(() => 
      sut.execute({
        email: 'teste@email.com',
        password: 'teste122',
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
