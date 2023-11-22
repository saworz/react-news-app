import './SearchNewsPageView.css';
import SearchQueryFields from '../SearchQueryFields';

import SearchQueryResults from '../SearchQueryResults';
import { useState } from 'react';

const SearchNewsPageView = () => {
  const [customQuery, setCustomQuery] = useState(null);

  const handleSearchButton = (queryData) => {
    setCustomQuery(queryData);
  };

  return (
    <div className="content-div">
      <SearchQueryFields onSearchButton={handleSearchButton} />
      <SearchQueryResults customQuery={customQuery} />
    </div>
  );
};

export default SearchNewsPageView;