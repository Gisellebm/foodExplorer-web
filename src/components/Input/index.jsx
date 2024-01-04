import PropTypes from 'prop-types';
import { Container } from "./styles";

export function Input( { icon: Icon, label, ...rest } ) {
    return (
        <Container>
            {label}
            {Icon && <Icon size={24}/>}
            <input {...rest}/>
        </Container>
    )
}

Input.propTypes = {
    icon: PropTypes.func,
    label: PropTypes.string
}