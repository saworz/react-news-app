import './SearchQueryResults.css';
import validateApiKey from '../../../api/ValidateApiKey';
import NoApiKey from '../../NoApiKey';
import NewsGrid from '../../NewsGrid';

const SearchQueryResults = ({ customQuery }) => {
  if (!validateApiKey()) {
    return (
        <div className="query-results">
          <NoApiKey />
        </div>
    );
  };

  if (!customQuery) {
    return null;
  };

  return (
    <div className="query-results">
      <NewsGrid newsQuery={customQuery} />
    </div>
  );
};

export default SearchQueryResults;