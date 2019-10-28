import React from 'react';
import PropTypes from 'prop-types';
import { countryPropType } from '../../shapes/country';
import CountryChip from '../CountryChip';
import { Spin } from 'antd';

const CountryChipsRow = ({countries = [], isLoading, error}) => (
    <div className="country-chips-row">
        {isLoading && <Spin />}
        {error && 'Error loading countries'}
        {
            countries.length > 0 &&
            countries.map(country => (
                <CountryChip
                    key={country.value}
                    countryIcon={country.icon}
                    countryText={country.text}
                    countryValue={country.value}
                />
            ))
        }
    </div>
);

CountryChipsRow.propTypes = {
    countries: PropTypes.arrayOf(countryPropType).isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
};

export default CountryChipsRow;
