import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
//const GITHUB_BASE_URL = 'https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  // uri: "https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic",
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
      __type(name:"Repository") {
        fields {
          name
          description
          type {
            kind
            name
            description
          }
          args {
            name
            description
            type {
              kind
              name
              description
            }
            defaultValue
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
.then(response => console.log('then => ', JSON.stringify(response)))
.catch(err => console.log('err => ', err));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,  
);
