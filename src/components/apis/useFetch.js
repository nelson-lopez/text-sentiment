import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = query => {
  const [data, setData] = useState(null);
  const [articleLinks, setArticles] = useState(null);
  const [summarization, setSummarization] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const key = 'fe0ae2c045bc416387744c6bdbd9ba7f';
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;

  ///Article links Api request
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(url)
      .then(response => {
        const links = response.data.articles.map(obj => {
          return obj.url;
        });
        if (isSubscribed) setArticles(links);
      })
      .catch(err => console.log(err));

    return () => (isSubscribed = false);
  }, [url]);
  /// News articles Api request
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(url)
      .then(response => {
        const fetchedData = response.data.articles;
        if (isSubscribed) {
          setData(fetchedData);
        }
      })
      .catch(err => console.log(err));
    return () => (isSubscribed = false);
  }, [url]);

  /// Summarized API request
  useEffect(() => {
    ////TODO: Clearn up const values
    const key = 'e64215eb626d15492bbd3ac04603242b';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let isSubscribed = true;
    axios
      .post(proxy + 'https://apiv2.indico.io/summarization/batch', {
        api_key: key,
        data: articleLinks
      })
      .then(response => {
        if (isSubscribed) {
          const summarized = response.data.results.map(arr => {
            return arr[0];
          });
          setSummarization(summarized);
        }
      })
      .catch(err => console.log(err));
    return () => (isSubscribed = false);
  }, [articleLinks]);

  //Sentiment analysis API request
  useEffect(() => {
    const key = 'e64215eb626d15492bbd3ac04603242b';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let isSubscribed = true;
    axios
      .post(proxy + 'https://apiv2.indico.io/emotion/batch', {
        api_key: key,
        data: summarization
      })
      .then(response => {
        if (isSubscribed) {
          setAnalysis(response.data.results);
        }
      })
      .catch(err => console.log(err));
  }, [summarization]);

  return [data, analysis];
};

export default useFetch;
