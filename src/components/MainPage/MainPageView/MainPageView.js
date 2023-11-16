import './MainPageView.css';
import PageTitle from "../PageTitle";
import Buttons from '../Buttons';
import NewsGrid from '../NewsGrid';

const MainPageView = () => {

  const html = 
  <div className="content-div">
    <PageTitle />
    <Buttons />
    <NewsGrid />
  </div>
  
  return (html);
};

export default MainPageView;