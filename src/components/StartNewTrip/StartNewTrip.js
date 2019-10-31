import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { includes } from 'ramda';
import CountryChipsRow from '../CountryChipsRow';
import SearchDestination from '../SearchDestination';

const StartNewTrip = () => {

    const [countries, setCountries] = useState([]);
    const [isLoadingCountries, setIsLoadingCountries] = useState(false);
    const [countriesError, setCountriesError] = useState(null);
    const [selectedDestinations, setSelectedDestinations] = useState([]);

    const updateSelectedDestinations = country => {
        if (country && !includes(country, selectedDestinations)) {
            const prevSelectedDestinations = selectedDestinations;
            setSelectedDestinations([...prevSelectedDestinations, country]);
        }
    };

    useEffect(() => {
        setIsLoadingCountries(true);
        axios.get('https://gist.githubusercontent.com/davidzadrazil/43378abbaa2f1145ef50000eccf81a85/raw/d734d8877c2aa9e1e8c1c59bcb7ec98d7f8d8459/countries.json')
            .then(response => {
                setTimeout(() => {
                    setCountries(response.data[0].data);
                    setIsLoadingCountries(false);
                }, 1000);
            })
            .catch(error => {
                setCountriesError(error);
                setIsLoadingCountries(false);
            });
    }, []);

    return (
        <div className="start-new-trip">
            <h1
                className="start-new-trip__title"
            >
                start new trip
            </h1>
            <div
                className="start-new-trip__search-bar"
            >
                <SearchDestination
                    destinations={countries}
                    updateSelectedDestinations={updateSelectedDestinations}
                    loading={isLoadingCountries}
                    error={countriesError}
                />
            </div>
            <CountryChipsRow countries={selectedDestinations} />
        </div>
    );
};

export default StartNewTrip;
