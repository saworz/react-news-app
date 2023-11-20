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
    console.log(name, value)
  };

  return (
    <div class="content-div">
      <div class="search-news">
        <h1>Custom searching query</h1>
        q: <input type="text" name="query"  onChange={handleInputChange}></input>
        sources: <input type="text" name="sources" value={searchInputs.sources} onChange={handleInputChange}></input>
        domains: <input type="text" name="domains" value={searchInputs.domains} onChange={handleInputChange}></input>
        from: <input type="date" name="fromDate" value={searchInputs.fromDate} onChange={handleInputChange}></input>
        to: <input type="date" name="toDate" value={searchInputs.toDate} onChange={handleInputChange}></input>
        language: <input type="text" name="language" value={searchInputs.language} onChange={handleInputChange}></input>
        sortBy: <input type="text" name="sortBy" value={searchInputs.sortBy} onChange={handleInputChange}></input>
      </div>  
    </div>
  )
};

export default SearchNewsPageView;