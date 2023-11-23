import './NewsGrid.css'
import useFetchData from '../../api/FetchData';

const NewsGrid = ({ newsTopic, newsQuery }) => {
  const formatPublishedDate = (publishedAt) => {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    const formattedDate = new Date(publishedAt).toLocaleString('en-GB', options);
    return formattedDate;
  };

  let searchData;

  if (newsTopic) {
    searchData = newsTopic;
  } else if (newsQuery) {
    searchData = newsQuery;
  };

  const { news, error } = useFetchData(searchData);
  
  const createArticles = () => {
    if (!news) {
      return <p> Loading articles </p>;
    } else {
        return news.articles.map((article, index) => {
          if (!article.urlToImage || !article.title || !article.source.name || !article.url || !article.content || !article.publishedAt) {
            return null
          };

          return (
          <div key={index} className='news-container'>
            <div className='news-image'>
              <img src={ article.urlToImage } />
            </div>
            <div className='news-source'>
              Source: { article.source.name }
            </div>
            <div className='news-title'>
              { article.title }
            </div>
            <div className='news-content'>
              {article.content}
            </div>
            <div className='news-date'>
              { formatPublishedDate(article.publishedAt) }
            </div>
          </div>
        );
      });
    }
  };

  const showError = () => {
    return (
      <div className="fetch-error">
        <h2>Error while fetching data from API.</h2>
        Error message: {error.message}
      </div>
    );
  };

  return (
    <div className='page-content'>
      Remove .env later on
      { error ? showError() : null }
      <div className='news-grid'>
        { !error ? createArticles() : null }
      </div>
    </div>

  );
};


export default NewsGrid;