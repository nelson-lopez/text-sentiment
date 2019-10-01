import React from 'react';

const Text = ({ title, body, link, image, date, author }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <h4>{date}</h4>
      <img src={image} alt="news"></img>
      <p>{body}</p>
      <a href={link}>Article</a>
    </div>
  );
};

export default Text;
