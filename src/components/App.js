import React, { useState, useContext } from 'react';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const searchBarContext = useContext({
    handleOnInput: input => {
      console.log(input);
    }
  });
  const [text, setText] = useState(null);
  const handleOnInput = input => {
    console.log(input);
  };
  return (
    <div>
      <Nav />
      <Route exact path="/Body" component={Body} />
      <Route
        exact
        path="/"
        render={() => {
          return <Header handleOnInput={handleOnInput} />;
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
