import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Text from './Text';

const Article = ({ data }) => {
  const [newsData, setNews] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setNews(data);
    }
    return () => (isSubscribed = false);
  }, [data]);

  if (newsData) {
    return newsData.map((obj, index) => {
      return (
        <Text
          key={index}
          author={obj.author}
          title={obj.title}
          body={obj.content}
          link={obj.url}
          image={obj.urlToImage}
          date={obj.publishedAt}
        />
      );
    });
  } else
    return (
      <div>
        <Graph />
      </div>
    );
};

export default Article;
