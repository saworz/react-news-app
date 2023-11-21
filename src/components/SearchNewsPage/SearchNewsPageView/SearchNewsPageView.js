import './SearchNewsPageView.css';
import { useEffect, useState } from 'react';

const SearchNewsPageView = () => {
  const [searchInputs, setSearchInputs] = useState({
    apikey: '',
    query: '',
    sources: '',
    domains: '',
    fromDate: '',
    toDate: '',
    language: '',
    sortBy: '',
  });

  const handleInputChange = (data) => {
    const { name, value } = data.target;
    setSearchInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log(searchInputs)
  }, [searchInputs]);

  return (
    <div className="content-div">
      <div className="search-news">
        <h1>Custom searching query</h1>
        API Key: <input type="text" name="apikey" onChange={handleInputChange}></input>
        q: <input type="text" name="query" onChange={handleInputChange}></input>
        sources: <input type="text" name="sources" onChange={handleInputChange}></input>
        domains: <input type="text" name="domains" onChange={handleInputChange}></input>
        from: <input type="date" name="fromDate" onChange={handleInputChange}></input>
        to: <input type="date" name="toDate" onChange={handleInputChange}></input>
        language: <select name="language" onChange={handleInputChange}>
          <option value="">Select language</option>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="he">Hebrew</option>
          <option value="it">Italian</option>
          <option value="nl">Dutch</option>
          <option value="no">Norwegian</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="sv">Swedish</option>
          <option value="zh">Chinese</option>
        </select>
        sortBy: <select name="sortBy" onChange={handleInputChange}>
          <option value="">Sorting type</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">PublishedAt</option>

        </select>
      </div>  
    </div>
  )
};

export default SearchNewsPageView;