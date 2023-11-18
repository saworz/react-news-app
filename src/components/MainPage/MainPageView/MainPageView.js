import './MainPageView.css';
import PageTitle from "../PageTitle";
import Buttons from '../Buttons';
import NewsGrid from '../NewsGrid';
import useFetchData from '../../../api/FetchData';
import { useState } from 'react';

const MainPageView = () => {
  const [newsTopic, setNewsTopic] = useState('general');

  const handleNewsUpdate = (data) => {
    setNewsTopic(data);
  };

  const html = 
  <div className="content-div">
    <PageTitle />
    <Buttons onUpdateNews={handleNewsUpdate}/>
    <NewsGrid newsTopic={newsTopic}/>
  </div>
  
  return (html);
};

export default MainPageView;