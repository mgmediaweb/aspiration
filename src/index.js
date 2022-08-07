import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
// const GITHUB_BASE_URL = 'https://api.spacex.land/graphql/';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

const github_data = {
  "token": "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",
  "username": "mgmediaweb",
};

const headers = {
  'Content-Type': 'application/json',
  Authentication: `bearer ${github_data.token}`
};

const body = {
  "query": `
    query {
      login(login: ${github_data.username}) {
        issues(first: 10) {
          nodes {
            title,
            body,
            closedAt
          }
        }
      }
    }`
};

fetch(GITHUB_BASE_URL, {
  method: 'POST',
  headers: headers,
  mode: 'no-cors',
  body: JSON.stringify(body),
})
.then(response => console.log('then => ', response))
.catch(err => console.log('err => ', err));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,  
);
