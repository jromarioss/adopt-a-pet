import * as z from 'zod'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterPetContainer, CastratedType, CastratedTypeButton } from './styles'
import { api } from '../../libs/axios'
import { useAuth } from '../../hooks/useAuth'

const createBodySchema = z.object({
  name: z.string().min(3, 'Informe o nome do pet.'),
  city: z.string().min(3, 'Informe a cidade do pet.'),
  description: z.string().min(3, 'Informe uma descrição do pet.'),
  age: z.enum(['FILHOTE', 'JOVEM', 'ADULTO', 'VELHO']),
  castrated: z.enum(['yes', 'no']),
})

type CreateFormInput = z.infer<typeof createBodySchema>

export function RegisterPet() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<CreateFormInput>({
    resolver: zodResolver(createBodySchema),
    defaultValues: {
      castrated: 'no'
    }
  })

  const { token } = useAuth()

  const router = useNavigate()

  async function handleSavePet(data: CreateFormInput) {
    try {
      await api.post('/create', {
        name: data.name,
        city: data.city,
        description: data.description,
        age: data.age,
        castrated: data.castrated === 'yes' ? true : false
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      alert('Pet cadastrado com sucesso.')

      router('/')
    } catch(error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
        return
      }
    }
  }

  return (
    <RegisterPetContainer>
      <h1>Cadastrar um Animal</h1>

      <form onSubmit={handleSubmit(handleSavePet)}>
        <label>Nome do pet</label>
        <input 
          type="text"
          {...register('name')} 
        />
        <span>{errors.name?.message}</span>

        <label>Cidade e estado ex: (Cerquilho, SP)</label>
        <input 
          type="text"
          {...register('city')} 
        />
        <span>{errors.city?.message}</span>

        <label>Descrição do pet</label>
        <textarea
          maxLength={100}
          {...register('description')} 
        />
        <span>{errors.description?.message}</span>

        <label>Idade</label>
        <select {...register('age')} >
          <option value='FILHOTE'>Filhote</option>
          <option value='JOVEM'>Jovem</option>
          <option value='ADULTO'>Adulto</option>
          <option value='VELHO'>Velho</option>
        </select>

        <label>Castrado
          <Controller 
            control={control}
            name="castrated"
            render={({ field }) => {
              return (
                <CastratedType onValueChange={field.onChange} value={field.value}>
                  <CastratedTypeButton value='yes'>
                    Sim
                  </CastratedTypeButton>

                  <CastratedTypeButton value='no'>
                    Não
                  </CastratedTypeButton>
                </CastratedType>
              );
            }}
          />
        </label>
        <button type='submit' className='buttonSave'>Salvar</button>
      </form>
    </RegisterPetContainer>
  )
}