import styled from 'styled-components'

export const SignInContainer = styled.div`
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    color:  ${(props) => props.theme['gray-600']};
  }

  a {
    color:  ${(props) => props.theme['gray-700']};
    text-decoration: none;
    text-align: center;
  }
`;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  input {
    height: 50px;
    width: 300px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-500']};
    padding-left: 1rem;
    outline: 0;

    &:focus {
      border: 1px solid ${(props) => props.theme.orange};
    }
  }

  button {
    all: unset;
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    font-weight: bold;
    transition: .4s;

    &:hover {
      background-color: ${(props) => props.theme['orange-100']};
    }
  }
`;  