import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({children, className}) => (
    <div
        className={!className ? 'sidebar' : 'sidebar ' + className}
    >
        {children}
    </div>
);

Sidebar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Sidebar;

