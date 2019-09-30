import React from 'react';

const Text = ({ title, body, link, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="news"></img>
      <p>{body}</p>
      <a href={link}>Article</a>
    </div>
  );
};

export default Text;
