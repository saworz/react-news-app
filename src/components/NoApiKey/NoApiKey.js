import './NoApiKey.css'

const NoApiKey = () => {
  return (
    <div className='no-api-key'>
      <h2>You haven't set the API Key for Newsapi.org.</h2>
      <h3>Go to <a href="/settings">Settings</a> to set it.</h3>
    </div>
  );
};

export default NoApiKey;