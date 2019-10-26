import React from 'react';
import { Layout } from './components';
import { Dashboard } from './pages';
import 'antd/dist/antd.css';
import './scss/index.scss';

const App = () => (
    <Layout>
        <Dashboard />
    </Layout>
);

export default App;
