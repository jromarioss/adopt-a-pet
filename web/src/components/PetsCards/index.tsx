import { PetsCardsContainer, CardInfo } from './styles'

import dog01 from '../../assets/img/images.jpg'
import { PetPropsDTO } from '../../pages/home'

interface PetsCardsProps {
  data: PetPropsDTO
}

export function PetsCards({ data }: PetsCardsProps) {
  return (
    <PetsCardsContainer>
      {!data.pet_images[0]?.image_name ? (
        <img src={dog01} alt='' />
      ) : (
        <img src={`http://localhost:3333/uploads/${data.pet_images[0]?.image_name}`} alt='' />
      )}
      <CardInfo>
        <h3>{data.name}</h3>
        <p>{data.city}</p>
      </CardInfo>
    </PetsCardsContainer>
  )
}