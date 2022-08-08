import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import star from './assets/images/star-icon.svg';
import './App.css';

const createQuery = (elements, search) => gql`
  query {
    search(
      first: ${elements}, 
      type: REPOSITORY, 
      query: "${search}"
    ) {
      nodes {
        ... on Repository { nameWithOwner, stargazerCount, url }
      }
    }
  }`;

function App() {
  const [elements, setElements] = useState(10);
  const [search, setSearch] = useState('React');
  const { data, loading, error } = useQuery(createQuery(elements, search));

  if (loading) return (<div className="container center-msj">Loading...</div>);
  if (error) return (<div className="container center-msj"><pre>{error.message}</pre></div>);

  const newSearch = (e) => {
    e.preventDefault();
    setElements(e.target.elements.value);
    setSearch(e.target.search.value);
  };

  return (
    <section>
      <header>
        <h1>Github GraphQL API Seeker</h1>
        <form onSubmit={newSearch}>
          <select name="elements" title="count of elements">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <input
            aria-label="search"
            aria-required="true"
            autoComplete="off"
            name="search"
            placeholder="Search"
            type="text"
            defaultValue={search}
            required
          />
          <button name="submit" type="submit">Search</button>
        </form>
      </header>
      <ul>
        {data.search.nodes.map((item) => (
          <li key={uuidv4()}>
            <a href={item.url} target="new">
              {item.nameWithOwner.slice(0, 70)}
            </a>
            <span title="Stargazer">
              {item.stargazerCount}
              <img src={star} className="starIcon" alt="star icon" />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
