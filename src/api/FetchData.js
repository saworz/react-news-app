import { useEffect, useState } from "react";

const useFetchData = (topic) => {
  console.log(topic)
  const [news, setNews] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
 
    fetch(apiUrl)
      .then((response) => {return response.json()})
      .then((data) => {setNews(data)});
  }, []);
  
  return news;
};

export default useFetchData;