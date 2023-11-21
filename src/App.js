import NavbarView from './components/Navbar/NavbarView';
import MainPageView from './components/MainPage/MainPageView';
import AboutPageView from './components/AboutPage/AboutPageView';
import SearchNewsPageView from './components/SearchNewsPage/SearchNewsPageView';
import SettingsPageView from './components/SettingsPage/SettingsPageView';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPageView />} />
          <Route path="/about" element={<AboutPageView />}/>
          <Route path="/search-news" element={<SearchNewsPageView />}/>
          <Route path="/settings" element={<SettingsPageView />}/>
        </Routes>
        
        <NavbarView />
      </div>
    </Router>
  );
};

export default App;
