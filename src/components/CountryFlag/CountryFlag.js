import React from 'react';
import PropTypes from 'prop-types';
import flagCzechia from './icons/czechia.svg';
import flagGermany from './icons/germany.svg';
import flagFrance from './icons/france.svg';
import flagSlovakia from './icons/slovakia.svg';

const countryIconsMap = {
    'flag-czechia': flagCzechia,
    'flag-germany': flagGermany,
    'flag-france': flagFrance,
    'flag-slovakia': flagSlovakia,
};

const CountryFlag = ({countryIcon, countryValue, className}) => (
    <img
        className={className}
        src={countryIconsMap[countryIcon]}
        alt={`${countryValue} flag`}
    />
);

CountryFlag.propTypes = {
    countryIcon: PropTypes.string.isRequired,
    countryValue: PropTypes.string.isRequired,
};

export default CountryFlag;
