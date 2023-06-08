import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations'
import { FetchPetsUseCase } from './fetch-pets-use-case'

let petsRepository: InMemoryPetsRepository
let organizationsRepository: InMemoryOrganizationsRepository;
let sut: FetchPetsUseCase

describe('Fetch Pets Use Case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository()
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new FetchPetsUseCase(petsRepository)

    const organization = await organizationsRepository.create({
      id: randomUUID(),
      name: 'teste name',
      email: 'teste@email.com',
      password_hash: await hash('teste123', 6),
      phone: '15 99692-7865',
      city: 'Cerquilho',
      address: 'Rua: Testando',
      address_number: 10,
      zip_code: 18526258,
      state: 'SP'
    })

    await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho01',
      description: 'Pet muito fofo',
      city: 'Cerquilho',
      age: 'JOVEM',
      castrated: false,
    })

    await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho02',
      description: 'Pet muito fofo',
      city: 'Cerquilho',
      age: 'JOVEM',
      castrated: true,
    })

    await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho03',
      description: 'Pet muito fofo',
      city: 'Cerquilho',
      age: 'FILHOTE',
      castrated: false,
    })

    await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho04',
      description: 'Pet muito fofo',
      city: 'Tiete',
      age: 'VELHO',
      castrated: true,
    })
  })

  it('should be able to fetch pets from city', async () => {
    const { pets } = await sut.execute({
      query: { city: 'Cerquilho' }
    })

    expect(pets).toHaveLength(3)
  })

  it('should be able to fetch pets by age', async () => {
    const { pets } = await sut.execute({
      query: {
        city: 'Cerquilho',
        age: 'FILHOTE'
      }
    })

    expect(pets).toHaveLength(1)
  })

  it('should be able to fetch pets by castrated', async () => {
    const { pets } = await sut.execute({
      query: {
        city: 'Cerquilho',
        castrated: true
      }
    })

    expect(pets).toHaveLength(1)
  })
})
