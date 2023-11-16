import './RolldownMenu.css'

const RolldownMenu = ({ isMenuOpen }) => {
  return (
    <div className="rolldown-menu" style={{display: isMenuOpen ? 'block' : 'none'}}>
      <div className="menu-option">
        Home
      </div>
      <div className="menu-option">
        About
      </div>
      <div className="menu-option">
        Search News
      </div>
      <a href="https://www.github.com/saworz" target="_blank" rel="noreferrer" className="menu-link">
        <div className="menu-option">
          My Github
        </div>
      </a>
    </div>
  );
};

export default RolldownMenu;