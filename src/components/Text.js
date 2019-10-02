import React from 'react';

const Text = ({ title, body, link, image, date, author }) => {
  if (title) {
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
  } else
    return (
      <div>
        <h3>Test title here</h3>
        <h4>John Doe</h4>
        <h4>4/24/2019</h4>
        <img
          src="https://www.ccn.com/wp-content/uploads/2019/10/shutterstock_717621892.jpg"
          alt="news"
        ></img>
        <p>
          "Bitcoin is down by over 40% from the 2019 high of $13,880. Any other
          asset plunging by 20% or more would have been in a bear market. But
          not the king of cryptocurrencies. Bitcoin has retraced by more than
          40% in previous bull runs and many market participants…"
        </p>
        <a href="https://www.ccn.com/experts-see-bitcoin-rallying-to-20000/">
          Article
        </a>
      </div>
    );
};

export default Text;
