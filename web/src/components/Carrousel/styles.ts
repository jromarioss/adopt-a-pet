import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 429px) {
    margin-top: 1rem;
  }
`;

export const CarrouselImage = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 429px) {
    width: 200px;
    height: 12rem;
  }

  img {
    width: 100%;
    height: 20rem;
    background-size: cover;
    background-position: center;
  }
`;