import React from 'react';

const SearchBar = ({ handleOnInput }) => {
  const handleInput = e => {
    handleOnInput(e.target.value);
  };
  console.log(handleOnInput);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="type here"
          onChange={handleInput}
        ></input>
        <button> Test button</button>
      </form>
    </div>
  );
};

export default SearchBar;
