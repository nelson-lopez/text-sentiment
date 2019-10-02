import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ handleOnSubmit }) => {
  return (
    <div class="header">
      <p class="ui segment home">
        Powered by Indico and the News API. This App gives the user Sentimental
        Analysis based on text input. Simply type in a topic below or make a
        custom request above for text analysis.
      </p>
      <SearchBar handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default Header;
