import './MainPageView.css';
import PageTitle from "../PageTitle";
import Buttons from '../Buttons';


const MainPageView = () => {

  const html = 
  <div className="content-div">
    <PageTitle />
    <Buttons />    
  </div>
  
  return (html);
};

export default MainPageView;