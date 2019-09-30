import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ handleOnInput }) => {
  return (
    <div>
      <SearchBar handleOnInput={handleOnInput} />
    </div>
  );
};

export default Header;
