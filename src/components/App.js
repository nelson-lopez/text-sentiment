import React, { useState } from 'react';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import useNYT from './apis/useNYT';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('');

  const handleOnSubmit = value => {
    setQuery(value);
  };

  const data = useNYT(query);
  return (
    <div>
      <Nav />
      <Route
        exact
        path="/Body"
        render={() => {
          return <Body data={data} />;
        }}
      />
      <Route
        exact
        path="/"
        render={() => {
          return <Header handleOnSubmit={handleOnSubmit} />;
        }}
      />
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
