import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Text from './Text';

const Article = ({ data, graphData }) => {
  const [newsData, setNews] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setNews(data);
    }
    return () => (isSubscribed = false);
  }, [data]);

  if (newsData && graphData) {
    return newsData.map((obj, index) => {
      return (
        <div>
          <Text
            key={index}
            author={obj.author}
            title={obj.title}
            body={obj.content}
            link={obj.url}
            image={obj.urlToImage}
            date={obj.publishedAt}
          />
          <Graph data={graphData[index]} />
        </div>
      );
    });
  } else
    return (
      <div class="article">
        <Text />
        <Graph />
        <Text />
        <Graph />
        <Text />
        <div class="graph-container">
          <Graph />
        </div>
      </div>
    );
};

export default Article;
