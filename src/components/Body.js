import React from 'react';
import Article from './Article';
import SearchBar from './SearchBar';
import Nav from './Nav';

const Body = ({ data, graphData, handleOnSubmit }) => {
  console.log(data);

  return (
    <div className="article-container">
      <div className="nav-body-container">
        <Nav />
      </div>
      <div className="search-body-container">
        <SearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      <div className="body-article-container">
        <Article data={data} graphData={graphData} />
      </div>
    </div>
  );
};

export default Body;
