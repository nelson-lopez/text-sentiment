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
          'https://www.nytimes.com/2019/09/21/us/politics/elizabeth-warren.html'
      })
      .then(response => {
        if (isSubscribed) setData(response.data);
      });
  }, []);
  console.log(data);
  return data;
};

export default useIndico;
