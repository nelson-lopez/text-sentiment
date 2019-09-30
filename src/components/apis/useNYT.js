import { useEffect, useState } from 'react';
import axios from 'axios';

const useNYT = query => {
  const [results, setResults] = useState(null);
  const key = 'Y6zhCKMTBlR0VBDIqw456U1Kl17ZxSfl';
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${key}`;

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(url, {
        params: {
          source: 'The New York Times'
        }
      })
      .then(response => {
        if (isSubscribed) {
          setResults(response.data.response.docs);
        }
      });

    return () => (isSubscribed = false);
  }, [query, url]);
  return results;
};

export default useNYT;
