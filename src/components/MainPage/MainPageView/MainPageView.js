import './MainPageView.css';
import PageTitle from "../PageTitle";
import Buttons from '../Buttons';
import NewsGrid from '../NewsGrid';
import NoApiKey from '../../NoApiKey';
import validateApiKey from '../../../api/ValidateApiKey';
import { useState } from 'react';

const MainPageView = () => {
  const [newsTopic, setNewsTopic] = useState('general');

  const handleNewsUpdate = (data) => {
    setNewsTopic(data);
  };

  const checkApiKey = () => {

    if (validateApiKey()) {
      return (
        <div className='content-div'>
          <PageTitle />
          <Buttons onUpdateNews={handleNewsUpdate}/>
          <NewsGrid newsTopic={newsTopic}/>
        </div>
      );
    } else {
      return (
        <div className='content-div'>
          <PageTitle />
          <NoApiKey />
        </div>
      );
    };
  };
  return (
    <div className="content-div">
      { checkApiKey() }
    </div>
  );
};

export default MainPageView;