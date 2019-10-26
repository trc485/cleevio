import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import CountryFlag from '../CountryFlag';

const CountryChip = ({countryIcon, countryText, countryValue}) => {
    return (
        <Chip
            className="country-chip"
            avatar={
                <CountryFlag
                    className="country-chip__flag"
                    countryIcon={countryIcon}
                    countryValue={countryValue}
                />}
            label={countryText}
        />
    );
};

CountryChip.propTypes = {
    countryIcon: PropTypes.string.isRequired,
    countryText: PropTypes.string.isRequired,
    countryValue: PropTypes.string.isRequired,
};


export default CountryChip;
