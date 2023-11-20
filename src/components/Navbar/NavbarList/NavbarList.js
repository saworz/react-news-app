import './NavbarList.css'

const NavbarList = () => {
  return (
    <ul className="menu-list">
      <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
      <li className='nav-item'><a href="/search-news" className="nav-link">Search News</a></li>
      <li className="nav-item"><a href="https://www.github.com/saworz" target="_blank" rel="noopener noreferrer" className="nav-link">My Github</a></li>
    </ul>
  );
};

export default NavbarList;