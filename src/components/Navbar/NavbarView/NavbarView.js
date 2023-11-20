import './NavbarView.css';
import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarList from '../NavbarList';
import RolldownMenu from '../RolldownMenu';
import useWindowDimensions from '../../../hooks/WindowSize';


const Navbar = () => {
  const { width, height } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (width > 900 && isMenuOpen) {
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const html = (
    <nav className="navbar">
      <div className="header-div">
        <a href="/" className="navbar-title">React News Searching</a>

        <div className="navbar-menu">
          <button className="menu-button" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={ faBars } size="2x" />
          </button>
          <NavbarList />
        </div>
      </div>
      <RolldownMenu isMenuOpen={isMenuOpen} />
    </nav>
  )
  return html;
}
 
export default Navbar;