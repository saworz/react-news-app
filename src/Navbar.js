import './Styles/header.css'
import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const html = (
    <nav className="navbar">
      <div className="header-div">
        <a href="" className="navbar-title">React News Searching</a>

        <div className="navbar-menu">
    
          <button className="menu-button" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={ faBars } size="2x" />
          </button>

          <ul className="menu-list">
            <li className="nav-item"><a href="" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="" className="nav-link">About</a></li>
            <li className='nav-item'><a href="" className="nav-link">Search News</a></li>
            <li className="nav-item"><a href="https://www.github.com/saworz" target="_blank" rel="noopener noreferrer" className="nav-link">My Github</a></li>
          </ul>
        </div>
      </div>
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
            <div className="menu-option">
              My Github
            </div>
          </div>
    </nav>
  )
  return html;
}
 
export default Navbar;