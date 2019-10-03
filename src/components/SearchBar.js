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
    <div className="ui form">
      <div className="field">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." onChange={handleInput} />
          <input type="submit" value="Submit" className="ui button"></input>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
