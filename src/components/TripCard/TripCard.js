import React from 'react';
import PropTypes from 'prop-types';
import CountryFlag from '../CountryFlag';

const TripCard = ({countryIcon, countryText, countryValue, address, buttons}) => (
    <div className="trip-card">
        <CountryFlag
            className="trip-card__flag"
            countryIcon={countryIcon}
            countryValue={countryValue}
        />
        <div
            className="trip-card__content"
        >
            <h4 className="trip-card__title">
                {countryText}
            </h4>
            <span className="trip-card__address">
                {address}
            </span>
        </div>
        <div
            className="trip-card__buttons"
        >
            {buttons && buttons.map(button => button)}
        </div>
    </div>
);

TripCard.propTypes = {
    countryIcon: PropTypes.string.isRequired,
    countryText: PropTypes.string.isRequired,
    countryValue: PropTypes.string.isRequired,
    address: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.node)
};

export default TripCard;
