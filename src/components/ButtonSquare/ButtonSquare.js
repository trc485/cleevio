import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const ButtonSquare = ({type, iconType, onClick}) => (
    <span onClick={onClick}
          className={type ? `button-square button-square--${type}` : 'button-square'}
    >
        <Icon
            className="button-square__icon"
            type={iconType}
        />
    </span>
);

ButtonSquare.propTypes = {
    type: PropTypes.string,
    IconType: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonSquare;
