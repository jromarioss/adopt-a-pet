import styled from 'styled-components'

export const PetsCardsContainer = styled.div`
  width: 15.625rem;
  height: 16rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 769px) {
    width: 13rem;
    height: 15rem;
  }

  @media (max-width: 429px) {
    width: 11.25rem;
    height: 13rem;
  }

  @media (max-width: 391px) {
    width: 10.5rem;
    height: 13rem;
  }

  @media (max-width: 361px) {
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 320px) {
    width: 8.5rem;
    height: 10rem;
  }

  img {
    width: 100%;
    height: 11rem;

    @media (max-width: 429px) {
      height: 8.5rem;
    }

    @media (max-width: 320px) {
      height: 6.5rem;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 0.875rem;

    @media (max-width: 769px) {
      margin-top: 0.5rem;
    }
  }
`;