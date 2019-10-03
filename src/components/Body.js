import React from 'react';
import Article from './Article';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Body = ({ data, graphData, handleOnSubmit }) => {
  console.log(data);

  return (
    <div class="article-container">
      <div class="nav-body-container">
        <Nav />
      </div>
      <div class="search-body-container">
        <SearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      <div class="body-article-container">
        <Article data={data} graphData={graphData} />
      </div>
    </div>
  );
};

export default Body;
