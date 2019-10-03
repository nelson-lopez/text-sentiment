import React, { useState } from 'react';
import '../styles/css/main.css';
import Body from './Body';
import Header from './Header';
import CustomSearch from './CustomSearch';
import useFetch from './apis/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('politics');

  const data = useFetch(query);

  const handleOnSubmit = value => {
    setQuery(value);
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/Body"
          render={() => {
            return (
              <Body
                data={data[0]}
                graphData={data[1]}
                handleOnSubmit={handleOnSubmit}
              />
            );
          }}
        />
      </Switch>
      <Route exact path="/CustomSearch" component={CustomSearch} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Header handleOnSubmit={handleOnSubmit} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
