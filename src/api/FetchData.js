import { useEffect, useState } from "react";

const useFetchData = (searchData) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl;
  
  const getCategoryUrl = (topic) => {
    return `https://newsapi.org/v2/top-headlines?country=us&category=${topic.toLowerCase()}&apiKey=${apiKey}`;
  };

  const getCustomQueryUrl = (customQuery) => {
    let queryString = '';

    const addFieldToQuery = (queryName, queryData) => {
      const newEntry = queryName + '=' + queryData + '&'
      queryString += newEntry
    };

    Object.keys(customQuery).forEach((key) => {
      if (customQuery[key]) {
        addFieldToQuery(key, customQuery[key])
      };
    });

    const baseUrl = 'https://newsapi.org/v2/everything?';
    const finalUrl = baseUrl + queryString + `apiKey=${apiKey}`;
    return finalUrl
  };

  if (typeof searchData === 'string') {
    apiUrl = getCategoryUrl(searchData);
  } else if (typeof searchData === 'object') {
    apiUrl = getCustomQueryUrl(searchData);
  };

  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error('Error fetching data')
        }
        return response.json()})
      .then((data) => {setNews(data)})
      .catch(err => {
        setError(err)});
  }, [apiUrl]);
  

  return {
    news: news, 
    error: error};
};

export default useFetchData;