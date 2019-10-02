import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div class="nav">
      <div class="nav-list">
        <Link to="/" class="ui secondary button">
          Home
        </Link>
        <Link to="/Body" class="ui secondary button">
          Articles
        </Link>

        <Link to="/CustomSearch" class="ui secondary button">
          Custom Search
        </Link>
      </div>
    </div>
  );
};

export default Nav;
