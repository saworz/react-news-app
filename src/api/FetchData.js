import { useEffect, useState } from "react";

const useFetchData = (topic) => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${topic.toLowerCase()}&apiKey=${apiKey}`;
 
    fetch(apiUrl)
      .then((response) => {return response.json()})
      .then((data) => {setNews(data)});
  }, [topic]);

  return news;
};

export default useFetchData;