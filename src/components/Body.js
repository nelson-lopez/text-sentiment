import React from 'react';
import Article from './Article';

const Body = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Article data={data} />
    </div>
  );
};

export default Body;
