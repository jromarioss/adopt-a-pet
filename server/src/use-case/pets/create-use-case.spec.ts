import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { beforeEach, describe, expect, it } from 'vitest'

import { CreateUseCase } from './create-use-case'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations'

let petsRepository: InMemoryPetsRepository
let organizationsRepository: InMemoryOrganizationsRepository;
let sut: CreateUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new CreateUseCase(petsRepository, organizationsRepository)
  })

  it('should be able to create a pet', async () => {
    const organization = await organizationsRepository.create({
      id: randomUUID(),
      name: 'teste name',
      email: 'teste@email.com',
      password_hash: await hash('teste123', 6),
      phone: '15 99692-7865',
      city: 'TestLandia',
      address: 'Rua: Testando',
      address_number: 10,
      zip_code: 18526258,
      state: 'SP'
    })

    const { pet } = await sut.execute({
      organization_id: organization.id,
      name: 'Doginho',
      description: 'Pet muito fofo',
      city: 'Cerquilho',
      age: 'JOVEM',
      castrated: true,
    })

    expect(pet.id).toEqual(expect.any(String))
    expect(pet.name).toEqual('Doginho')
  })  
})
