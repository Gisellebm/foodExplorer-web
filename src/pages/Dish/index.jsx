import { FiPlus, FiMinus } from "react-icons/fi";
import { SlArrowLeft } from "react-icons/sl";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Container, Content } from "./styles"
import { ButtonText } from "../../components/ButtonText";

import dishImg1 from "../../assets/dish1.png";
import { Tag } from "../../components/Tag";

export function Dish() {

  const ingredients = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"];
  return (
    <Container>
      <Header />
      <main>
        <ButtonText >
          <SlArrowLeft />
          Voltar
        </ButtonText>
        <Content>
          <img src={dishImg1} alt="Salada Ravanello"/>
          <section>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <Tag key={String(index)} title={ingredient} />
                ))
              }
            </div>
            <div className="buttons">
              <div>
                <FiPlus />
                01
                <FiMinus />
              </div>
              <Button title="incluir ∙ R$ 25,00" />
            </div>
            
          </section>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}


