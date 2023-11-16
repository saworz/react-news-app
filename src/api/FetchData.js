import { useEffect, useState } from "react";

const useFetchData = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const apiKey = 'c7fc465a1fb94a71aa9134c71eee85b1';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    
    fetch(apiUrl)
      .then((response) => {return response.json()})
      .then((data) => {setNews(data)});
  }, []);
  
  return news;
};

export default useFetchData;