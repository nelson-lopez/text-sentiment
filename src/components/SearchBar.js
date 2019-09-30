import React, { useState } from 'react';

const SearchBar = ({ handleOnSubmit }) => {
  const [input, setInput] = useState(null);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleOnSubmit(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleInput}></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default SearchBar;
