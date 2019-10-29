import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = ({children}) => (
    <div
        className="section-content"
    >
        {children}
    </div>
);

SectionContent.propTypes = {
    children: PropTypes.node
};

export default SectionContent;
