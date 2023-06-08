import { PetsCardsContainer, CardInfo } from './styles'

import dog01 from '../../assets/img/dog01.jpg'
import { PetPropsDTO } from '../../dto/petPropsDTO'

interface PetsCardsProps {
  data: PetPropsDTO
}

export function PetsCards({ data }: PetsCardsProps) {
  return (
    <PetsCardsContainer>
      <img src={dog01} alt='' />
      <CardInfo>
        <h3>{data.name}</h3>
        <p>{data.city}</p>
      </CardInfo>
    </PetsCardsContainer>
  )
}