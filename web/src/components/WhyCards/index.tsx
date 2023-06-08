import { WhyCardsContainer } from './styles'

import why01 from '../../assets/why01.svg'

export function WhyCards() {
  return (
    <WhyCardsContainer>
      <img src={why01} alt='' />
      <div>
        <h3>Nesse exato momento,</h3>
        <p>existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</p>
      </div>
    </WhyCardsContainer>
  )
}