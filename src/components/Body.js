import React from 'react';
import Article from './Article';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Body = ({ data, graphData, handleOnSubmit }) => {
  console.log(data);

  return (
    <div class="article-container">
      <Nav />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      <Article data={data} graphData={graphData} />
    </div>
  );
};

export default Body;
