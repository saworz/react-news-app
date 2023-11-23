import { useEffect, useState } from "react";

const useFetchData = (searchData) => {
  const apiKey = localStorage.getItem('apiKey');
  let errorText = 'Error fetching data. Verify API Key or add more filters.'
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

    let filtersUsed = 0;

    Object.keys(customQuery).forEach((key) => {
      if (customQuery[key]) {
        addFieldToQuery(key, customQuery[key])
        filtersUsed += 1;
      };
    });

    if (filtersUsed === 0) {
      errorText = 'Use at least one filter.'
    };

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
          throw Error(errorText);
        }
        return response.json()})
      
      .then((data) => {
        setNews(data)
        setError(null)})
      
      .catch(err => {
        setError(err)});
  }, [apiUrl]);
  
  return {
    news: news, 
    error: error};
};

export default useFetchData;