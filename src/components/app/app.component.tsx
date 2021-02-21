import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header.component';

import '../../common/styles';
import './app.component.css';
import Product from '../../pages/product/product.page';
import Home from '../../pages/home/home.page';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';

const App: React.FC = () => {
    return(
        <ApolloProvider client={client}>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/product">
                    <Product/>
                </Route>
            </Switch>
        </Router>
        </ApolloProvider>
    );

}

export default App;