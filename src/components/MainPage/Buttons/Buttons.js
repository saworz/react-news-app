import './Buttons.css';
import { useState } from "react";

const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState('General');

  const handleButtonClick = (topic) => {
    setActiveButton(topic);
  };

  const createButton = (topic) => {
    const button = (
      <button
        onClick={() => handleButtonClick(topic)} className="topic-button"
        style={{ backgroundColor: activeButton === topic ? 'rgb(140, 140, 136)' : 'rgb(194, 194, 214)' }}
      >
        {topic}
      </button>
      );

    return button;
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

export default ToggleButtons;