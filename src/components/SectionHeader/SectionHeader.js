import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShowAllButton } from '../../assets/svg/show-all.svg';

const SectionHeader = ({title}) => (
    <div
        className="section-header u-separator-bottom"
    >
        <h5
            className="section-header__title"
        >
            {title}
        </h5>
        <ShowAllButton />
    </div>
);

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionHeader;
