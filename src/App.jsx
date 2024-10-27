import Background from './assets/Images/Background.png';
import Capa from './assets/Images/Capa.png';
import Button1 from './assets/Images/Button1.png'
import Button2 from './assets/Images/Button2.png'
import Button3 from './assets/Images/Button3.png'
import Button4 from './assets/Images/Button4.png'
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: start;
  background-image: url(${Background});
  background-size: cover; /* Expande a imagem para cobrir todo o container */
  background-repeat: no-repeat;
  background-position: center; /* Centraliza a imagem */
  background-attachment: fixed; /* Mantém a imagem fixa ao rolar */
`

const FinalCont = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CapaImg = styled.img`
  width: 350px;
`

const Title = styled.h1`
  position: absolute;
  top: 80%; /* Ajusta a posição para ficar abaixo da imagem */
  text-align: center;
  font-family: 'Impact', sans-serif;
  color: #fff; /* Ajusta a cor se precisar de contraste */
  text-transform: uppercase; /* Adiciona texto em maiúsculas */
  font-size: clamp(3rem, 5vw + 0.5rem, 3.8rem); /* Tamanho responsivo */
  white-space: nowrap; /* Impede quebra de linha */
  overflow: hidden; /* Esconde o que excede o contêiner */
  text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */

`
const TitleContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`
const ButtonLink = styled.img`
  max-width: 400px;
  width: 100%;
  padding-bottom: 1rem;
`

const Direitos = styled.p `
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  opacity: 0.5;

`

function App() {

  return (

      <Container>
        <FinalCont>
          <TitleContent>
            <CapaImg src={Capa} alt=""></CapaImg>
            <Title>Nossas redes</Title>
          </TitleContent>

          <a href="https://www.instagram.com/projetacao.ltda/" target="_blank" rel="noopener noreferrer"><ButtonLink src={Button1} /></a>
          <a href="https://www.instagram.com/ventiloar/" target="_blank" rel="noopener noreferrer"><ButtonLink src={Button2} /></a>
          <a href="https://api.whatsapp.com/send?phone=5588981581328" target="_blank" rel="noopener noreferrer"><ButtonLink src={Button3} /></a>
          <a href="https://sites.google.com/view/projetacao/nossos-produtos/ventiladores-em-s%C3%A9rie?authuser=0" target="_blank" rel="noopener noreferrer"><ButtonLink src={Button4} /></a>

          <Direitos>Todos os direitos reservados</Direitos>

        </FinalCont>
        
      </Container>
  )
}

export default App
