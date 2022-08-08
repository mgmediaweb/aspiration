import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import './index.css';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL, fetch, headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  }),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,  
);
