import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding-inline: 5rem;

  @media (max-width: 1024px) {
    padding-inline: 4rem;
  }

  @media (max-width: 769px) {
    padding-inline: 3rem;
  }

  @media (max-width: 429px) {
    padding-inline: 1rem;
  }

  h2 {
    color: ${(props) => props.theme.orange};
    font-size: 2.625rem;
    font-weight: bold;
    margin-top: 2rem;

    @media (max-width: 769px) {
      text-align: center;
    }

    @media (max-width: 429px) {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`;

export const CardsArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardsAreaText = styled.section`
  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 0.5rem;

    @media (max-width: 769px) {
      text-align: center;
    }

    @media (max-width: 429px) {
      font-size: 1rem;
      margin-top: 0.75rem;
    }
  }
`;

export const Cards = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const InfoArea = styled.section``;

export const InfoCards = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 769px) {
    justify-content: center;
  }
`;

export const AboutUsArea = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutUsAreaInfo = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 1025px) {
    gap: 3rem;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const AboutUsRight = styled.div`
  width: 500px;

  @media (max-width: 1025px) {
    width: 450px;
  }

  @media (max-width: 429px) {
    width: 100%;
  }

  p {
    text-align: justify;
  }
`;

export const AboutUsLeft= styled.div`
  @media (max-width: 1025px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 429px) {
    img {
      width: 380px;
    }
  }

  @media (max-width: 391px) {
    img {
      width: 100%;
    }
  }
`;

export const ContactsArea = styled.section``;

export const ContactsInfo = styled.section`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Right = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: left;

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-600']};
    margin-bottom: 0.75rem;

    @media (max-width: 429px) {
      font-size: 1rem;
    }
  }
`;


export const Left = styled.section`
  iframe {
    border: 0;

    @media (max-width: 1025px) {
      width: 450px;
      height: 300px;
    }

    @media (max-width: 429px) {
      width: 350px;
    }

    @media (max-width: 361px) {
      width: 320px;
    }

    @media (max-width: 321px) {
      width: 290px;
    }
  }
`;
