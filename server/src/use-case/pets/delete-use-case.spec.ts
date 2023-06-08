import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { beforeEach, describe, expect, it } from 'vitest'

import { DeleteUseCase } from './delete-use-case'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations'

let petsRepository: InMemoryPetsRepository
let organizationsRepository: InMemoryOrganizationsRepository;
let sut: DeleteUseCase

describe('Delete Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new DeleteUseCase(petsRepository)
  })

  it('should be able to delete a pet', async () => {
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

    const pet1 = await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho',
      description: 'Pet muito fofo',
      city: 'Cerquilho',
      age: 'JOVEM',
      castrated: true,
    })

    const pet2 = await petsRepository.create({
      organization_id: organization.id,
      name: 'Doginho02',
      description: 'Pet doidao',
      city: 'Cerquilho',
      age: 'JOVEM',
      castrated: false,
    })

    await sut.execute({ id: pet1.id })

    const deletedPet1 = await petsRepository.findById(pet1.id)
    const existingPet2 = await petsRepository.findById(pet2.id)

    expect(deletedPet1).toBeNull()
    expect(existingPet2).not.toBeNull()
  })  
})
