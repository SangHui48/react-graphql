import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../common/styles';
import './app.component.css';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import Header from '../header/header.component';
import Product from '../../pages/product/product.page';
import Home from '../../pages/home/home.page';
import client from '../../common/apollo-client';
import Detail from '../../pages/detail/detail.page';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/product">
                        <Product />
                    </Route>
                    <Route path="/product/:id">
                        <Detail />
                    </Route>
                    {/* 
                        <Route excat path="/" component={Home} /> 
                        <Route excat path="/product" component={Product} /> 
                        <Route path="/product/:id" component={Detail} /> 
                        이 형식이 더 깔끔할것 같아요 어떠세요? => 전병길
                    */}
                </Switch>
            </Router>
        </ApolloProvider>
    );

}

export default App;