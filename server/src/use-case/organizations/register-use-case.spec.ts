import { compare } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'

import { RegisterUseCase } from './register-use-case'
import { OrganizationEmailExistsError } from '../errors/organization-email-exists-error'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations'

let organizationsRepository: InMemoryOrganizationsRepository;
let sut: RegisterUseCase

describe('Register Organization Use Case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new RegisterUseCase(organizationsRepository)
  })

  it('should be able to register', async () => {
    const { organization } = await sut.execute({
      name: 'teste',
      email: 'teste@email.com',
      password_hash: 'teste123',
      phone: '15 99823-2345',
      city: 'Testelandia',
      address: 'Rua: Testando',
      address_number: 123,
      zip_code: 18520283,
      state: 'SP'
    })

    expect(organization.id).toEqual(expect.any(String))
  })

  it('should hash the password upo registration', async () => {
    const { organization } = await sut.execute({
      name: 'teste',
      email: 'teste@email.com',
      password_hash: 'teste123',
      phone: '15 99823-2345',
      city: 'Testelandia',
      address: 'Rua: Testando',
      address_number: 123,
      zip_code: 18520283,
      state: 'SP'
    })

    const isPasswordHashed = await compare('teste123', organization.password_hash)

    expect(isPasswordHashed).toBe(true)
  })

  it('should not be able to register with the same email', async () => {
    await sut.execute({
      name: 'teste',
      email: 'teste@email.com',
      password_hash: 'teste123',
      phone: '15 99823-2345',
      city: 'Testelandia',
      address: 'Rua: Testando',
      address_number: 123,
      zip_code: 18520283,
      state: 'SP'
    })

    await expect(() =>
      sut.execute({
        name: 'teste',
        email: 'teste@email.com',
        password_hash: 'teste123',
        phone: '15 99823-2345',
        city: 'Testelandia',
        address: 'Rua: Testando',
        address_number: 123,
        zip_code: 18520283,
        state: 'SP'
      })
    ).rejects.toBeInstanceOf(OrganizationEmailExistsError)
  })
})
