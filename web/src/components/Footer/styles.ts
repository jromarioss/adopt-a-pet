import styled from 'styled-components'

export const FooterContainer = styled.header`
  width: 100vw;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding-inline: 5rem;
  background-color: ${(props) => props.theme['orange']};
`;
