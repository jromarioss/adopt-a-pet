/* eslint-disable no-useless-catch */
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SignInContainer, Content } from './styles'

import { useAuth } from '../../hooks/useAuth'

const loginBodySchema = z.object({
  email: z.string().email('Informe o e-mail.'),
  password: z.string().min(6, 'Informe a senha.')
})

type LoginFormInput = z.infer<typeof loginBodySchema>

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>({
    resolver: zodResolver(loginBodySchema)
  })
  
  const { signIn } = useAuth()

  async function handleSignIn({ email, password }: LoginFormInput) {
    try {
      await signIn(email, password)
    } catch(error) {
      throw error
    }
  }

  return (
    <SignInContainer>
      <h1>LOGIN</h1>
      <Content>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <label>
            <p>E-mail:</p>
            <input 
              type="email"
              {...register('email')} 
            />
            <span>{errors.email?.message}</span>
          </label>
          <label>
            <p>Senha:</p>
            <input 
              type="password"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
          </label>
          <button type='submit'>Entrar</button>
        </form>
        <NavLink to='/'>
          <p>Voltar</p>
        </NavLink>
      </Content>
    </SignInContainer>
  )
}