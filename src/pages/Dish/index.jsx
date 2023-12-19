import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Container, Content } from "./styles"

export function Dish() {

  return (
    <Container>
      <Header />
      <main>
        <Content>

          <Button title="incluir ∙ R$ 25,00" />
        </Content>
      </main>
      <Footer />
    </Container>
  )
}


