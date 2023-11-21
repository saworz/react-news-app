const validateApiKey = () => {
  const apiKey = localStorage.getItem('apiKey');
  console.log(apiKey)
  if (apiKey === 'null' || apiKey === '') {
    return false;
  } else {
    return true;
  };
};

export default validateApiKey;