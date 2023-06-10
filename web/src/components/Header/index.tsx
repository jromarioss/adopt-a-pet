import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { HeaderContainer, HeaderNav, MenuMobile } from './styles'

import Logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { tokenIsValid, userInfo, signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={Logo} alt='Logo agro terra' />
      </NavLink>

      <HeaderNav>
        <NavLink to='/'>Quem somos</NavLink>
        <NavLink to='/'>Por que adotar</NavLink>
        <NavLink to='/'>Contatos</NavLink>
        {tokenIsValid &&
          <>
            <NavLink to='/create'>Cadastrar pets</NavLink>
            <NavLink to='/profile'>Perfil</NavLink>
          </>
        }
      </HeaderNav>

      {tokenIsValid ?
        <div>
          <p className='welcome'>Bem-vindo <strong>{userInfo?.name}</strong></p>
          <NavLink to='/' className='buttonLogin' onClick={handleSignOut}>Sair</NavLink>
        </div>
        :
        <NavLink to='/sessions' className='buttonLogin'>Entrar</NavLink>
      }
      
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Menu size={48} color='#FFF' />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content sideOffset={21}>
            <MenuMobile>
              <div>
                <DropdownMenu.Item asChild>
                  <NavLink to='/'>Quem somos</NavLink>
                  </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <NavLink to='/'>Por que adotar</NavLink>
                  </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <NavLink to='/'>Contatos</NavLink>
                </DropdownMenu.Item>

                {tokenIsValid &&
                  <>
                    <DropdownMenu.Item asChild>
                      <NavLink to='/create'>Cadastrar pets</NavLink>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <NavLink to='/profile'>Perfil</NavLink>
                    </DropdownMenu.Item>
                  </>
                }
              </div>
              {tokenIsValid ?
                <DropdownMenu.Item asChild>
                  <NavLink to='/' className='buttonLoginMobile' onClick={handleSignOut}>Sair</NavLink>
                </DropdownMenu.Item>
                :
                <DropdownMenu.Item asChild>
                  <NavLink to='/sessions' className='buttonLoginMobile'>Entrar</NavLink>
                </DropdownMenu.Item>
              }
            </MenuMobile>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </HeaderContainer>
  )
}
