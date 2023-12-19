import { Container, Brand } from './styles';
import logo from '../../assets/logoFooter.svg';

export function Footer() {

    return (
        <Container>
            <main>
                <Brand>
                    <img src={logo} alt="Logo" />
                </Brand>
                <p>© 2023 - Todos os direitos reservados.</p>
            </main>
        </Container>
    )
}

