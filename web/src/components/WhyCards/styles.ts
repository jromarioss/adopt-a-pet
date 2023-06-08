import styled from 'styled-components'

export const WhyCardsContainer = styled.div`
  height: 13rem;
  display: flex;
  justify-content: center;
  padding: 0.875rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1.5px solid ${(props) => props.theme.orange};

  img {
    @media (max-width: 321px) {
      width: 12 0px;
    }
  }

  h3 {
    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  p {
    width: 12rem;
    margin-top: 0.75rem;

    @media (max-width: 391px) {
      width: 10rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 361px) {
      width: 9.5rem;
    }

    @media (max-width: 320px) {
      width: 7.5rem;
      font-size: 0.875rem;
    }
  }
`;