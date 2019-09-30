import React from 'react';
import Nav from './Nav';
import Body from './Body';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/Body" component={Body} />
      <Route exact path="/" component={Header} />
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
