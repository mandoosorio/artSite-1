import logo from './logo.svg';
//import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import { Provider } from "react-redux";
import store from "./utils/store";

//import { Provider } from 'react-redux';
import Navbar from './pages/nav.js';
import Main from './pages/main.js';

//import { StoreProvider } from './utils/GlobalState';
import Time from './pages/timelapses';
import Detail from './pages/Detail.js';
import Cart from './components/Cart/index.js';
import Product from './components/ProductItem/index.js';
import Checkout from './pages/checkout.js';

import Footer from './pages/footer.js';
import Contact from './pages/contact.js';
// import Checkout from './components/Checkout/index.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
        <ApolloProvider client={client}>
          <Router>
            <div className="App">
            <Provider store={store}>
                <Navbar/>
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/time" component={Time} />
                    <Route exact path="./contact.js" component={Contact}/>
                    <Route exact path="/detail" component={Detail}/>
                  </Switch>
                  <Detail />
                  <Checkout />
                  <Footer />
              </Provider>
            </div>
          </Router>
        </ApolloProvider>
  )
}

export default App;
