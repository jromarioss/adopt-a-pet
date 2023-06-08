import { useState } from 'react'
import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { HeaderContainer, HeaderNav, MenuMobile } from './styles'

import Logo from '../../assets/logo.png'

export function Header() {
  const [hasId, setHasId] = useState(false);

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={Logo} alt='Logo agro terra' />
      </NavLink>

      <HeaderNav>
        <NavLink to='/'>Quem somos</NavLink>
        <NavLink to='/'>Por que adotar</NavLink>
        <NavLink to='/'>Contatos</NavLink>
      </HeaderNav>

      {hasId ?
        <NavLink to='/'>Sair</NavLink>
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
              </div>
              <DropdownMenu.Item asChild>
                <NavLink to='/sessions' className='buttonLoginMobile'>Entrar</NavLink>
              </DropdownMenu.Item>
            </MenuMobile>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

    </HeaderContainer>
  )
}
