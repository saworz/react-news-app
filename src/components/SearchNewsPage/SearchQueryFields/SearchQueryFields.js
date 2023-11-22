import './SearchQueryFields.css';
import { useEffect, useState } from 'react';


const SearchQueryFields = ({ onSearchButton }) => {
  const [searchInputs, setSearchInputs] = useState({
    q: '',
    searchIn: '',
    sources: '',
    domains: '',
    from: '',
    to: '',
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

  const handleSearch = () => {
    onSearchButton(searchInputs);
  };

  return (
    <div className="search-content">
      <h1>Custom searching query</h1>

      <div className="search-fields">
        <div className="search-field">
          Query text: <input type="text" name="q" onChange={handleInputChange}></input>
        </div>
        <div className="search-field">
          Search in: <select name="searchIn" onChange={handleInputChange}>
            <option value="">Fields to search</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="content">Content</option>
          </select>
        </div>
      </div>

      <div className="search-fields">
        <div className="search-field">
          Sources: <input type="text" name="sources" onChange={handleInputChange}></input>
        </div>
        <div className="search-field">
          Domains: <input type="text" name="domains" onChange={handleInputChange}></input>
        </div>
      </div>

      <div className="search-fields">
        <div className="search-field">
          From: <input type="date" name="from" onChange={handleInputChange}></input>
        </div>
        <div className="search-field">
          To: <input type="date" name="to" onChange={handleInputChange}></input>
        </div>
      </div>

      <div className="search-fields">
        <div className="search-field">
          Sort by: <select name="sortBy" onChange={handleInputChange}>
            <option value="">Sorting type</option>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">PublishedAt</option>
          </select>
        </div>
        <div className="search-field">
          Language: <select name="language" onChange={handleInputChange}>
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
        </div>
      </div>

        <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchQueryFields;