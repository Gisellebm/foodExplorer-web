import PropTypes from 'prop-types';
import { BiSearch, BiReceipt } from 'react-icons/bi';
import { Container, Brand } from "./styles";
import logo from '../../assets/logoHeader.svg';
import logoAdmin from '../../assets/logoHeader-Admin.svg';

export function Header({ isAdmin }) {
    const logoImg = isAdmin ? logoAdmin : logo;
    return (
        <Container>
            <main>
                <Brand>
                    <img src={logoImg} alt="Logo" />
                </Brand>
                <h1>Dish</h1>

            </main>
        </Container>
    )
}

Header.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
}