/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import * as z from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProfileContainer, FormInside, FormLeft, FormRight, RightInside } from './styles'
import { api } from '../../libs/axios'
import { useAuth } from '../../hooks/useAuth'

const profileParamsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  city: z.string(),
  address: z.string(),
  addressNumber: z.coerce.number(),
  zipCode: z.coerce.number(),
  state: z.string(),
})

type FormInput = z.infer<typeof profileParamsSchema>

export function Profile() {
  const { register, handleSubmit, setValue } = useForm<FormInput>({
    resolver: zodResolver(profileParamsSchema),
  })

  const { token, userInfo } = useAuth()

  async function fetchProfile() {
    try {
      const { data } = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setValue('name', data.user.name)
      setValue('email', data.user.email)
      setValue('phone', data.user.phone)
      setValue('city', data.user.city)
      setValue('address', data.user.address)
      setValue('addressNumber', data.user.address_number)
      setValue('zipCode', data.user.zip_code)
      setValue('state', data.user.state)
    } catch(error) {
      console.log(error)
    }
  }

  async function handleSaveProfile(data: FormInput) {
    try {
      if (!data.password) {
        return alert('Para atualizar o Perfil digite a senha antiga.')
      }

      await api.patch(`/update/${userInfo?.id}`, {
        name: data.name,
        email: data.email,
        password_hash: data.password,
        phone: data.phone,
        city: data.city,
        address: data.address,
        address_number: data.addressNumber,
        zip_code: data.zipCode,
        state: data.state,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      alert('Perfil atualizado com sucesso.')
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <h1>Perfil</h1>

      <form onSubmit={handleSubmit(handleSaveProfile)}>
        <FormInside>
          <FormLeft>
            <label>Nome:</label>
            <input 
              type='text'
              {...register('name')} 
            />

            <label>E-mail:</label>
            <input 
              type='text'
              {...register('email')} 
            />

            <label>Senhas antiga:</label>
            <input 
              type='password'
              {...register('password')} 
            />
            <label>Telefone:</label>
            <input 
              type='text'
              {...register('phone')} 
            />
          </FormLeft>

          <FormRight>
            <label>Cidade:</label>
            <input 
              type='text'
              {...register('city')} 
            />

            <RightInside>
              <div>
                <label>Endereço:</label>
                <input
                  className='inputAddress'
                  type='text'
                  {...register('address')} 
                />
              </div>
              <div>
                <label>Número:</label>
                <input
                  className='inputAddressNumber'
                  type='text'
                  {...register('addressNumber')} 
                />
              </div>
            </RightInside>

            <RightInside>
              <div>
                <label>CEP:</label>
                <input
                  className='inputAddress'
                  type='text'
                  maxLength={8}
                  {...register('zipCode')} 
                />
              </div>
              <div>
              <label>Estado:</label>
                <input
                  className='inputAddressNumber'
                  type='text'
                  {...register('state')} 
                />
              </div>
            </RightInside>
          </FormRight>
        </FormInside>
        <button type='submit' className='buttonSave'>Salvar</button>
      </form>
    </ProfileContainer>
  )
}