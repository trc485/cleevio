import React, { useState, useEffect } from 'react';
import { Select, Input } from 'antd';
import { ButtonSquare, CountryChipsRow, TripCard, Icon } from '../../components';
import axios from 'axios';

const {Option} = Select;
const {Search} = Input;

const Dashboard = () => {

    const [countries, setCountries] = useState([]);
    const [isLoadingCountries, setIsLoadingCountries] = useState(false);
    const [countriesError, setCountriesError] = useState(null);

    console.log(countries);

    useEffect(() => {
        setIsLoadingCountries(true);
        axios.get('https://gist.githubusercontent.com/davidzadrazil/43378abbaa2f1145ef50000eccf81a85/raw/d734d8877c2aa9e1e8c1c59bcb7ec98d7f8d8459/countries.json')
            .then(response => {
                setCountries(response.data[0].data);
                setIsLoadingCountries(false);
            })
            .catch(error => {
                setCountriesError(error);
                setIsLoadingCountries(false);
            });
    }, []);

    return (
        <div>
            <h2>
                Home
            </h2>
            <Select defaultValue="user" style={{width: 150}}>
                <Option value="user">Filip Bednarik</Option>
            </Select>
            <h1>
                Start New Trip
            </h1>
            <Icon type="aircraft" />
            <div>
                <Search
                    placeholder="Where do you want to travel?"
                    style={{width: 300}}
                />
            </div>
            <CountryChipsRow
                countries={countries}
                isLoading={isLoadingCountries}
                error={countriesError}
            />
            <TripCard
                countryValue="germany"
                countryText="Germany"
                countryIcon={'flag-germany'}
                address="165, L547, 37586, Dassel, Northeim, Niedersachsen"
                buttons={[
                    <ButtonSquare
                        iconType="home"
                        key="button-1"
                    />,
                    <ButtonSquare
                        iconType="home"
                        key="button-2"
                    />,
                ]}
            />
        </div>
    );
};

export default Dashboard;
