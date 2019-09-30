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

  console.log(newsData);
  if (newsData) {
    return newsData.map(obj => {
      return (
        <Text
          key={obj._id}
          title={obj.headline.main}
          body={obj.snippet}
          images={obj.multimedia[0]}
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
