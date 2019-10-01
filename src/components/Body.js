import React from 'react';
import Article from './Article';

const Body = ({ data }) => {
  return (
    <div>
      <Article data={data} />
    </div>
  );
};

export default Body;
