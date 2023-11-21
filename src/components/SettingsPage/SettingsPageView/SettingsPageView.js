import { useEffect, useState } from 'react';
import './SettingsPageView.css';

const SettingsPageView = () => {

  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  
  const handleApiKeyChange = (data) => {
    const { value } = data.target;
    setApiKey(value);
  };

  useEffect(() => {
    localStorage.setItem('apiKey', apiKey);
  }, [apiKey]);

  return (
    <div className="content">
      <div className="settings">
        <h1>App settings</h1>
        <h2>Set API Key for NewsAPI.org:</h2>
        <input type="text" name="apiKey" value={apiKey} onChange={handleApiKeyChange}></input>
      </div>
    </div>
  );
};

export default SettingsPageView;