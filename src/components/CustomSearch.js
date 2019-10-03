import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomSearchBar from './SearchBar';
import CustomGraph from './CustomGraph';
import Nav from './Nav';

const CustomSearch = () => {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState([]);

  const handleOnSubmit = value => {
    setQuery(value);
  };

  useEffect(() => {
    const key = 'e64215eb626d15492bbd3ac04603242b';
    // const key = '';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let isSubscribed = true;
    axios
      .post(proxy + 'https://apiv2.indico.io/emotion', {
        api_key: key,
        data: query
      })
      .then(response => {
        if (isSubscribed) {
          setData(response.data.results);
        }
      });
  }, [query]);

  console.log(query);
  console.log(data);

  return (
    <div>
      <Nav />
      <div className="custom-searchbar">
        <CustomSearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      <CustomGraph data={data} />
    </div>
  );
};

export default CustomSearch;
