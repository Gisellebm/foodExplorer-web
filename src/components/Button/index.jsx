import PropTypes from 'prop-types';
import { Container } from './styles';

export function Button({ icon: Icon, title, ...rest }) {
    return (
        <Container 
            type='button'
            {...rest}
        >
            {Icon && <Icon />}{title}
        </Container>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
};