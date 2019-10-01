import React, { useState } from 'react';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import useNews from './apis/useNews';
import useIndico from './apis/useIndico';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('politics');

  const proxy = 'https://cors-anywhere.herokuapp.com/';

  const handleOnSubmit = value => {
    setQuery(value);
  };

  const indicoData = useIndico(proxy);
  console.log(indicoData);

  const data = useNews(query);
  console.log(data);
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
