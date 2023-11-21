import './RolldownMenu.css';

const RolldownMenu = ({ isMenuOpen }) => {
  return (
    <div className="rolldown-menu" style={{display: isMenuOpen ? 'block' : 'none'}}>
      <a href="/">
        <div className="menu-option">
          Home
        </div>
      </a>
      <a href="/about">
        <div className="menu-option">
          About
        </div>
      </a>
      <a href="/search-news">
        <div className="menu-option">
          Search News
        </div>
      </a>
      <a href="/settings">
        <div className="menu-option">
          Settings
        </div>
      </a>
      <a href="https://www.github.com/saworz" target="_blank" rel="noreferrer" className="menu-link">
        <div className="menu-option">
          My Github
        </div>
      </a>
    </div>
  );
};

export default RolldownMenu;