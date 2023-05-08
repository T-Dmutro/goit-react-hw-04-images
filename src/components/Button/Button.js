import PropTypes from 'prop-types';
import {ButtonStyle} from './Button.styled.js'

const Button = ({ onClick }) => {
  return (
    <ButtonStyle  type="button" onClick={onClick}>
      Load more
    </ButtonStyle>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
