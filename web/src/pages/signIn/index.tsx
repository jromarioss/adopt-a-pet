import { NavLink } from 'react-router-dom'

import { SignInContainer, Content } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <h1>LOGIN</h1>
      <Content>
        <form>
          <label htmlFor="">
            <p>E-mail:</p>
            <input type="text" />
          </label>
          <label htmlFor="">
            <p>Senha:</p>
            <input type="password" />
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