import PropTypes from 'prop-types';
import { FiPlus } from "react-icons/fi";
import { Container } from './styles'

export function Tag({ title, hasIcon = false, ...rest }) {
    
  return (
    <Container 
      {...rest} 
      className={hasIcon ? 'simpleTag' : 'iconTag'}
    >
      {title} {hasIcon && <FiPlus  />}
    </Container>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool
}