import React from 'react';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Header = ({ handleOnSubmit }) => {
  return (
    <div class="home-container">
      <div class="header">
        <p class="ui segment home">
          Powered by Indico and the News API. This app is designed to give the
          user Sentiment Analysis based on text input. Simply type in a topic
          below or make a custom request for text analysis.
        </p>
        <SearchBar handleOnSubmit={handleOnSubmit} />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
