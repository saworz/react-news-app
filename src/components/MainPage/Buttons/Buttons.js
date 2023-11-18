import './Buttons.css';
import { useState } from "react";
import useFetchData from '../../../api/FetchData';

const ToggleButtons = ({ onUpdateNews }) => {
  const [activeButton, setActiveButton] = useState('General');

  const handleButtonClick = (topic) => {  
    setActiveButton(topic);
    onUpdateNews(topic)
  };

  const ButtonComponent = (obj) => {
    const topic = obj.topic;
    return (
      <button
      onClick={() => handleButtonClick(topic)} className="topic-button"
      style={{ backgroundColor: activeButton === topic ? 'rgb(140, 140, 136)' : 'rgb(194, 194, 214)' }}
    >
      {topic}
    </button>
    );
  };

  return (
    <div className="news-topics">
      <ButtonComponent topic='General' />
      <ButtonComponent topic='Technology' />
      <ButtonComponent topic='Science' />
      <ButtonComponent topic='Health' />
      <ButtonComponent topic='Business' />
      <ButtonComponent topic='Politics' />
    </div>
  );
};

export default ToggleButtons;