import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {

    return (
        <Container>
            <img src={logo} alt="Logo da Food Explorer" />

            <Form>
                <h1>Crie sua conta</h1>
                <Input 
                    placeholder="Exemplo: Maria da Silva" 
                    type="text"
                    label={'Seu nome'}
                    required
                />

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

                <Button className="createAccount" title="Criar conta"/>

                <ButtonText className="haveAccount">Já tenho uma conta</ButtonText>

            </Form>
        </Container>
    )
}