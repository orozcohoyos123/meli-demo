import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../components/Layout';

const BrowserRouterMock = props => (
    <BrowserRouter>
        <Layout>
            <Switch>
                {props.children}
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default BrowserRouterMock;
