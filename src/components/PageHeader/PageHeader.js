import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const {Option} = Select;

const PageHeader = ({title}) => (
    <div
        className="page-header u-separator-bottom"
    >
        <h2
            className="page-header__title"
        >
            {title}
        </h2>
        <Select defaultValue="user" style={{width: 150}}>
            <Option value="user">Filip Bednarik</Option>
        </Select>
    </div>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeader;
