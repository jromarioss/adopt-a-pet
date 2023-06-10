import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-600']};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-block: 1rem;
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

export const FormInside = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .inputAddress {
    width: 215px;
  }

  .inputAddressNumber {
    width: 70px;
  }
`;


export const RightInside = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FormLeft = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;