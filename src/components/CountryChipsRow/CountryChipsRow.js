import React from 'react';
import PropTypes from 'prop-types';
import { countryPropType } from '../../shapes/country';
import CountryChip from '../CountryChip';

const CountryChipsRow = ({countries = []}) => (
    <div className="country-chips-row">
        {
            countries.length > 0 ?
                countries.map(country => (
                    <CountryChip
                        key={country.value}
                        countryIcon={country.icon}
                        countryText={country.text}
                        countryValue={country.value}
                    />
                ))
                :
                <span>
                    No destinations selected
                </span>
        }
    </div>
);

CountryChipsRow.propTypes = {
    countries: PropTypes.arrayOf(countryPropType).isRequired,
};

export default CountryChipsRow;
