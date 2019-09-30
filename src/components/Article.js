import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Text from './Text';

const Article = ({ data }) => {
  console.log(data);
  const [newsData, setNews] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setNews(data);
    }
    return () => (isSubscribed = false);
  }, [data]);

  console.log(newsData);
  if (newsData) {
    return newsData.map((obj, index) => {
      console.log(obj);
      return (
        <Text
          key={index}
          title={obj.title}
          body={obj.content}
          link={obj.url}
          image={obj.urlToImage}
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
