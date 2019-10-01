import React from 'react';
import Article from './Article';

const Body = ({ data, graphData }) => {
  console.log(data);

  return (
    <div>
      <Article data={data} graphData={graphData} />
    </div>
  );
};

export default Body;
