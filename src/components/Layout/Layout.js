import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Menu from '../Menu';

const Layout = ({children}) => (
    <div className="layout">
        <Sidebar
            className="sidebar--dark"
        >
            <Menu />
        </Sidebar>
        <Content>
            {children}
        </Content>
        <Sidebar
            className="sidebar--bordered"
        >
            Here Goes Other Sidebar
        </Sidebar>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
