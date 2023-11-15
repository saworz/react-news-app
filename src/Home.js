import React, { useState } from 'react';
import './Styles/home.css';


const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (topic) => {
    setActiveButton(topic);
  };

  const createButton = (topic) => {
    return (
    <button
      onClick={() => handleButtonClick(topic)} class="topic-button"
      style={{ backgroundColor: activeButton === topic ? 'rgb(140, 140, 136)' : 'rgb(194, 194, 214)' }}
    >
      {topic}
    </button>
    );
  };

  return (
    <div className="news-topics">
      {createButton('General')}
      {createButton('Technology')}
      {createButton('Science')}
      {createButton('Health')}
      {createButton('Business')}
      {createButton('Politics')}
    </div>
  );
};

const Home = () => {

  const html = 
  <div className="content-div">
    <div className="title-div">
      <h1>Browse most recent news</h1>
    </div>
    <ToggleButtons />  
  </div>
  
  return (html);

}
export default Home;