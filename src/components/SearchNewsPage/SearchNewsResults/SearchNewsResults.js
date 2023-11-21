import './SearchNewsResults.css';
import NewsGrid from '../../NewsGrid';

const SearchNewsResults = () => {
  return (
    <div className="query-results">
      <h2>Query results</h2>
      <NewsGrid newsTopic={'general'}/>
    </div>
  );
};

export default SearchNewsResults;