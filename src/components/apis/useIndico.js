import { useEffect, useState } from 'react';
import axios from 'axios';

const useIndico = proxy => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const key = 'e64215eb626d15492bbd3ac04603242b';
    const isSubscribed = true;
    axios
      .post(proxy + 'https://apiv2.indico.io/summarization', {
        api_key: key,
        data:
          'http://www.cnn.com/2016/12/16/health/psychology-of-gift-giving/index.html'
      })
      .then(response => {
        if (isSubscribed) setData(response.data);
      });
  }, []);
  console.log(data);
  return data;
};

export default useIndico;
