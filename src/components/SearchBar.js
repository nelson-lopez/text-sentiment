import React, { useState, useCallback } from 'react';

const SearchBar = ({ handleOnSubmit }) => {
  const [input, setInput] = useState(null);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      handleOnSubmit(input);
    },
    [handleOnSubmit, input]
  );

  return (
    <div class="ui form">
      <div class="field">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." onChange={handleInput} />
          <input type="submit" value="Submit" class="ui button"></input>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
