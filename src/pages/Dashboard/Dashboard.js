import React from 'react';
import { Select, Input } from 'antd';
import { ReactComponent as AircraftSvg } from '../../assets/icons/aircraft.svg';
import { ButtonSquare, CountryChip, TripCard } from '../../components';
import { iconsMap } from '../../assets/icons/iconsMap';

const {Option} = Select;
const {Search} = Input;

const Dashboard = () => (
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
        <AircraftSvg />
        <Search
            placeholder="Where do you want to travel?"
            style={{width: 300}}
        />
        <CountryChip
            countryIcon={"flag-germany"}
            countryText="Germany"
            countryValue="germany"
        />
        <ButtonSquare
            icon={iconsMap.home}
        />
        <TripCard
            countryValue="germany"
            countryText="Germany"
            countryIcon={'flag-germany'}
            address="165, L547, 37586, Dassel, Northeim, Niedersachsen"
            buttons={[
                <ButtonSquare
                    icon={iconsMap.home}
                />,
                <ButtonSquare
                    icon={iconsMap.home}
                />,
            ]}
        />
    </div>
);

export default Dashboard;
