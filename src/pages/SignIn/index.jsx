import { Container, Form } from "./styled";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {

    return (
        <Container>
            <img src={logo} alt="Logo da Food Explorer" />

            <Form>
                <h1>Faça login</h1>
                
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                    label={'Email'}
                    required
                />

                <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    label={'Senha'}
                    required
                />

                <Button className="enter" title="Entrar"/>

                <ButtonText className="createAccount">Criar uma conta</ButtonText>

            </Form>
        </Container>
    )
}