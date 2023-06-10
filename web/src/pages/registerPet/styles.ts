import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RegisterPetContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-600']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    color: ${(props) => props.theme['red-500']}
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

  textarea {
    resize: none;
    height: 5rem;
    width: 300px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-500']};
    padding: 1rem;
    outline: 0;

    &:focus {
      border: 1px solid ${(props) => props.theme.orange};
    }
  }

  select {
    height: 50px;
    width: 300px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-500']};
    padding-inline: 1rem;
    outline: 0;
  }

  option {
    font-weight: bold;
  }

  .buttonSave {
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

export const CastratedType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const CastratedTypeButton = styled(RadioGroup.Item)`
  color: ${props => props.theme["gray-600"]};
  font-weight: bold;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${props => props.theme.orange};
  border-radius: 6px;
  cursor: pointer;

  &[data-state="checked"] {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
    transition: background-color 0.2s;
  }
`;
