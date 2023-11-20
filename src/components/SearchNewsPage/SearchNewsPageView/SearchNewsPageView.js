import './SearchNewsPageView.css';
import { useState } from 'react';

const SearchNewsPageView = () => {
  const [searchInputs, setSearchInputs] = useState({
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
    console.log(searchInputs)
  };

  return (
    <div className="content-div">
      <div className="search-news">
        <h1>Custom searching query</h1>
        q: <input type="text" name="query" onChange={handleInputChange}></input>
        sources: <input type="text" name="sources" onChange={handleInputChange}></input>
        domains: <input type="text" name="domains" onChange={handleInputChange}></input>
        from: <input type="date" name="fromDate" onChange={handleInputChange}></input>
        to: <input type="date" name="toDate" onChange={handleInputChange}></input>
        language: <input type="text" name="language" onChange={handleInputChange}></input>
        sortBy: <input type="text" name="sortBy" onChange={handleInputChange}></input>
      </div>  
    </div>
  )
};

export default SearchNewsPageView;