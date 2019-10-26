import React from 'react';
import PropTypes from 'prop-types';

const ButtonSquare = ({type, icon, onClick}) => (
    <span onClick={onClick}
          className={type ? `button-square button-square--${type}` : 'button-square'}
    >
        <img
            className="button-square__icon"
            src={icon}
            alt={`${icon} icon`}
        />
    </span>
);

ButtonSquare.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonSquare;
