import { Container, Brand } from './styles';
import logo from '../../assets/logoFooter.svg';

export function Footer() {

    return (
        <Container>
            <footer>
                <Brand>
                    <img src={logo} alt="Imagem de um polígono cinza" />
                </Brand>
                <p>© 2023 - Todos os direitos reservados.</p>
            </footer>
        </Container>
    )
}

