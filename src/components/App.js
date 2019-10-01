import React, { useState } from 'react';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import useNews from './apis/useNews';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('politics');

  const data = useNews(query);
  console.log(data);

  const handleOnSubmit = value => {
    setQuery(value);
  };

  return (
    <div>
      <Nav />
      <Route
        exact
        path="/Body"
        render={() => {
          return <Body data={data[0]} />;
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
