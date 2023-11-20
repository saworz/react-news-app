import './AboutPageView.css'

const AboutPageView = () => {
  return (
    <div class="content-div">
      <div class="about-info">
        <h1>React News Searching Project</h1>
        <p>My first react project that uses news api from <a href="https://www.newsapi.org" target="_blank" rel="noreferrer">newsapi.org</a>. On the main page news can be sorted by categories and in the <a href="search-news">Search News</a> tab you can apply more filters, such as country, source, text in content, text in title or date.</p>
        <p>Check out more of my work on my <a href="https://www.github.com/saworz" target="_blank" rel="noreferrer">Github</a>.</p>
      </div>
    </div>
  )
};

export default AboutPageView;