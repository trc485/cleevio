import React from 'react';
import { Select, Input } from 'antd';
import { ReactComponent as AircraftSvg } from '../../assets/icons/aircraft.svg';

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
    </div>
);

export default Dashboard;
