import { useEffect, useState } from 'react'

import { 
  HomeContainer,
  Cards,
  InfoCards,
  CardsArea,
  InfoArea,
  CardsAreaText,
  ContactsArea,
  ContactsInfo,
  Left,
  Right,
  AboutUsArea,
  AboutUsAreaInfo,
  AboutUsLeft,
  AboutUsRight
} from './styles'

import { api } from '../../libs/axios'

import { Carrousel  } from '../../components/Carrousel'
import { PetsCards } from '../../components/PetsCards'
import { WhyCards } from '../../components/WhyCards'

import agroImg from '../../assets/img/image6.png'

export interface PetPropsDTO {
  id: string
  name: string
  city: string
  pet_images: [{
    id: string
    image_name: string
  }]
}

export function Home() {
  const [pets, setPets] = useState<PetPropsDTO[]>([])
  
  async function fetchPets() {
    try {
      const response = await api.get('/pets')
      setPets(response.data.pets)
    } catch(error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchPets()
  }, [])

  return (
    <HomeContainer>
      <Carrousel />

      <CardsArea>
        <CardsAreaText>
          <h2>Leve a felicidade para o seu lar</h2>
          <p>Nosso site está cheio de cachorrinhos e gatinhos ansiosos por uma família venha ver!</p>
        </CardsAreaText>
        <Cards>
        {
          pets.map((item) => (
            <PetsCards key={item.id} data={item} />
          ))
        }
        </Cards>
      </CardsArea>

      <InfoArea>
        <h2>Por que adotar?</h2>
        <InfoCards>
          <WhyCards />
          <WhyCards />
          <WhyCards />
        </InfoCards>
      </InfoArea>

      <AboutUsArea>
        <h2>Quem somos</h2>
        <AboutUsAreaInfo>
          <AboutUsLeft>
            <img src={agroImg} alt="" />
          </AboutUsLeft>
          <AboutUsRight>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque dolorem impedit recusandae, tenetur fugit magni animi. Maiores voluptatem tempora tempore nulla aspernatur deleniti consequuntur consequatur odio, in quod sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem maiores doloribus commodi esse ab. In debitis sunt corrupti explicabo cumque dolor laborum quis qui possimus consectetur ad, reiciendis doloremque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque dolorem impedit recusandae, tenetur fugit magni animi. Maiores voluptatem tempora tempore nulla aspernatur deleniti consequuntur consequatur odio, in quod sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem maiores doloribus commodi esse ab. In debitis sunt corrupti explicabo cumque dolor laborum quis qui possimus consectetur ad, reiciendis doloremque.</p>
          </AboutUsRight>
        </AboutUsAreaInfo>
      </AboutUsArea>

      <ContactsArea>
        <h2>Contatos</h2>
        <ContactsInfo>
          <Right>
            <div>
              <p>Phone: XX XXXXX-XXXX</p>
              <p>E-mail: teste@email.com</p>
              <p>Endereço: Rua São José n 168</p>
              <p>Horário: 08:00 ás 18:00</p>
            </div>
          </Right>
          <Left>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14672.79420273755!2d-47.77228161284176!3d-23.162952399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c60cd9f7f2e2bf%3A0x3f9f9b2d78038845!2sAgroterra%20Cerquilho%20-%20Pet%20Shop%20e%20Banho%20%26%20Tosa%20(LOJA%201)!5e0!3m2!1spt-BR!2sbr!4v1686227993966!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
          </Left>
        </ContactsInfo>
      </ContactsArea>

    </HomeContainer>

  )
}
