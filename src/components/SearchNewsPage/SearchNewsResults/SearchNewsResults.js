import './SearchNewsResults.css';
import NewsGrid from '../../NewsGrid';
import validateApiKey from '../../../api/ValidateApiKey';
import NoApiKey from '../../NoApiKey';

const SearchNewsResults = () => {
  if (validateApiKey()) {
    return (
      <div className="query-results">
        <h2>Query results</h2>
        <NewsGrid newsTopic={'general'}/>
      </div>
    );
  } else {
    return (
      <div className="query-results">
        <NoApiKey />
      </div>
    );
  };

};

export default SearchNewsResults;