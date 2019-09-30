import React from 'react';

const Text = ({ title, body, image }) => {
  console.log(image);
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Text;
