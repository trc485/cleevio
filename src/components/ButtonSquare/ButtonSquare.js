import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const ButtonSquare = ({type, iconType, onClick}) => {

    const btnClass = classNames({
        'button-square': true,
        [`button-square--${type}`]: type,
    });

    const iconClass = classNames({
        'button-square__icon': true,
        [`icon--${type}`]: type,
    });

    return (
        <span onClick={onClick}
              className={btnClass}
        >
        <Icon
            className={iconClass}
            type={iconType}
        />
    </span>
    );
};

ButtonSquare.propTypes = {
    type: PropTypes.oneOf(['danger', 'favorite']),
    IconType: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonSquare;
