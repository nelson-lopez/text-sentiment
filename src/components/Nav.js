import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        <Link to="/" className="ui secondary button">
          Home
        </Link>
        <Link to="/Body" className="ui secondary button">
          Articles
        </Link>

        <Link to="/CustomSearch" className="ui secondary button">
          Custom Search
        </Link>
      </div>
    </div>
  );
};

export default Nav;
