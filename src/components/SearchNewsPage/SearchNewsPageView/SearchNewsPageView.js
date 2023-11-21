import './SearchNewsPageView.css';
import SearchQueryFields from '../SearchQueryFields';
import SearchNewsResults from '../SearchNewsResults';

const SearchNewsPageView = () => {
  return (
    <div className='content-div'>
      <SearchQueryFields />
      <SearchNewsResults />
    </div>
  );
};

export default SearchNewsPageView;