import React, { useState } from 'react';
import '../styles/css/main.css';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import CustomSearch from './CustomSearch';
import useFetch from './apis/useFetch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('politics');

  const data = useFetch(query);

  const handleOnSubmit = value => {
    setQuery(value);
  };
  console.log(query);

  return (
    <div>
      <Nav />
      <Route
        exact
        path="/Body"
        render={() => {
          return <Body data={data[0]} graphData={data[1]} />;
        }}
      />

      <Route
        exact
        path="/"
        render={() => {
          return <Header handleOnSubmit={handleOnSubmit} />;
        }}
      />
      <Route exact path="/CustomSearch" component={CustomSearch} />
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
