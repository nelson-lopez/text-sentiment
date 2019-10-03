import React from 'react';

const Text = ({ title, body, link, image, date, author }) => {
  if (title) {
    return (
      <div className="text-container">
        <h3 className="article-title">{title}</h3>
        <h4 className="article-author">{author}</h4>
        <h4 className="article-date">{date.slice(0, 10)}</h4>
        <div className="image-div">
          <img src={image} alt="news" className="ui fluid image"></img>
        </div>
        <div className="ui segment">
          <p>{body}</p>
        </div>
        <a href={link} className=" ui inverted primary button">
          Article
        </a>
      </div>
    );
  }
};

export default Text;
