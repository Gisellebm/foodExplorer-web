import PropTypes from 'prop-types';
import { BiSearch} from 'react-icons/bi';
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from 'react-icons/fi'
import { Container, Brand, Search, Logout } from "./styles";
import logo from '../../assets/logoHeader.svg';
import logoAdmin from '../../assets/logoHeader-Admin.svg';
import { Input } from '../Input';
import { Button } from '../Button';

export function Header({ isAdmin = false }) {
    const logoImg = isAdmin ? logoAdmin : logo;
    const IconButton = isAdmin ? "" : PiReceipt;
    const TitleButton = isAdmin ? "Novo Prato" : "Pedidos (0)";


    return (
        <Container>
            <main>
                <Brand>
                    <img src={logoImg} alt="Logo" />
                </Brand>
                <Search>
                    <Input icon={BiSearch} placeholder="Busque por pratos ou ingredientes" type="search" />
                </Search>
                <Button icon={IconButton} className="receipt"  title={TitleButton} TitleButton type="button"  />

                <Logout>
                    <FiLogOut />
                </Logout>
            </main>
        </Container>
    )
}

Header.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
}