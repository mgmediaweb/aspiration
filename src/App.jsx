import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import PuffLoader from 'react-spinners/ClipLoader';
import Header from './components/header/Header';
import Item from './components/item/Item';
import createQuery from './components/createQuery/createQuery';
import createTopicList from './components/createTopicList/createTopicList';
import './App.css';

function App() {
  const [elements, setElements] = useState(10);
  const [search, setSearch] = useState('react');
  const [topicList, setTopicList] = useState({});
  const { data, loading, error } = useQuery(createQuery(elements, search));

  const newSearch = (elems, find) => {
    setElements(elems);
    setSearch(find);
  };

  useEffect(() => {
    if (data) setTopicList(createTopicList(data.search.nodes));
  }, [data]);

  if (loading) {
    return (
      <div className="container center-msj">
        <PuffLoader color="#999999" size={80} />
      </div>
    );
  }
  if (error) {
    return (<div className="container center-msj"><pre>{error.message}</pre></div>);
  }

  return (
    <section>
      <Header
        newSearch={newSearch}
        search={search}
      />
      <ul>
        { topicList && Object.keys(topicList).map((data) => (
          <Item key={data} topic={data} data={topicList[data]} />
        ))}
      </ul>
    </section>
  );
}

export default App;
