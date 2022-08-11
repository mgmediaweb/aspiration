import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header/Header';
import Item from './components/item/Item';
import createQuery from './components/createQuery/createQuery';
import './App.css';

function App() {
  const [elements, setElements] = useState(10);
  const [search, setSearch] = useState('react');
  const { data, loading, error } = useQuery(createQuery(elements, search));

  const newSearch = (elems, find) => {
    setElements(elems);
    setSearch(find);
  };

  if (loading) return (<div className="container center-msj">Loading...</div>);
  if (error) return (<div className="container center-msj"><pre>{error.message}</pre></div>);

  return (
    <section>
      <Header
        newSearch={newSearch}
        search={search}
      />
      <ul>
        { data.search.nodes.map((data) => <Item data={data} key={uuidv4()} />) }
      </ul>
    </section>
  );
}

export default App;
