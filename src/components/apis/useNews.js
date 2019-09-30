import { useEffect, useState } from 'react';
import axios from 'axios';

const useNews = query => {
  const [data, setData] = useState(null);
  const key = 'fe0ae2c045bc416387744c6bdbd9ba7f';

  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;

  useEffect(() => {
    let isSubscribed = true;
    axios.get(url).then(response => {
      const fetchedData = response.data.articles;
      if (isSubscribed) {
        setData(fetchedData);
      }
    });
    return () => (isSubscribed = false);
  }, [url]);

  return data;
};

export default useNews;
