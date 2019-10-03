import React from 'react';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Header = ({ handleOnSubmit }) => {
  return (
    <div className="home-container">
      <div className="header">
        <p className="ui segment home">
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
