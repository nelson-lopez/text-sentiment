import React from 'react';
import Article from './Article';
import SearchBar from './SearchBar';

const Body = ({ data, graphData }) => {
  console.log(data);

  return (
    <div class="article-div">
      <SearchBar />
      <Article data={data} graphData={graphData} />
    </div>
  );
};

export default Body;
