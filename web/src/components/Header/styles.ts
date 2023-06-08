import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5rem;
  background-color: ${(props) => props.theme['orange']};

  @media (max-width: 429px) {
    padding-inline: 1rem;
  }

  img {
    width: 52px;
    height: 52px;
  }

  .buttonLogin {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 1.25rem;
    transition: .3s;
    border: 1.5px solid ${(props) => props.theme.white};
    padding-inline: 1rem;
    padding-block: 0.75rem;
    border-radius: 8px;
    
    &:hover {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.orange};
    }

    @media (max-width: 429px) {
      display: none;
    }
  }

  svg {
    display: none;

    @media (max-width: 429px) {
      display: block;
    }
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 1.25rem;
    transition: .3s;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
  }

  @media (max-width: 429px) {
    display: none;
  }
`;

export const MenuMobile = styled.nav`
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  background-color: ${(props) => props.theme.orange};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .buttonLoginMobile {
    border: 1px solid ${(props) => props.theme.white};
    padding-inline: 1rem;
    padding-block: 0.75rem;
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 1.25rem;
    transition: .3s;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
  }
`;
