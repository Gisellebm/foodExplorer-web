import PropTypes from 'prop-types';
import { PiPencilSimple, PiHeartStraight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Container } from "./styles";
import theme from '../../styles/theme';
import dishImg1 from "../../assets/dish1.png";
import { Button } from '../Button';

export function Card({ isAdmin = false, isFavoryte = false, ...rest }) {

    return (
        <Container {...rest} isAdmin={isAdmin}>
            {isAdmin ? (
                <PiPencilSimple size={'2.4rem'} />
            ) : (
                <PiHeartStraight 
                    size={'2.4rem'} 
                    fill={isFavoryte ? `${theme.COLORS.TOMATO_100}` : 'transparent'} 
                />

            )}

            <img src={dishImg1} alt="Salada Ravanello"/>

            <h3>Salada Ravanello <IoIosArrowForward size={'1.4rem'} /> </h3>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <span>R$ 49,97</span>

            {!isAdmin && 
                <div className="buttons">
                <div>
                    <FiPlus />
                    01
                    <FiMinus />
                </div>
                <Button title="incluir" />
                </div>
            }


            
        </Container>
    )
}

Card.propTypes = {
    isAdmin: PropTypes.bool,
    isFavoryte: PropTypes.bool
}