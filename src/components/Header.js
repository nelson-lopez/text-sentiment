import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ handleOnSubmit }) => {
  return (
    <div>
      <SearchBar handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default Header;
