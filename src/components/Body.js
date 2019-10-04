import React from 'react';
import Article from './Article';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Body = ({ data, graphData, handleOnSubmit }) => {
  return (
    <div clas="article-container">
      <div clas="nav-body-container">
        <Nav />
      </div>
      <div clas="search-body-container">
        <SearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      <div clas="body-article-container">
        <Article data={data} graphData={graphData} />
      </div>
    </div>
  );
};

export default Body;
