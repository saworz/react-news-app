import './Styles/header.css'
import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen ? 'block' : 'none')
  }

  const html = (
    <nav className="navbar">
      <div className="header-div">
        <a href="" className="navbar-title">Flask News Search Engine</a>

        <div className="navbar-menu">
    
          <button className="menu-button" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={ faBars } size="2x" />
          </button>

          <ul className="menu-list">
            <li className="nav-item"><a href="" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="" className="nav-link">About</a></li>
            <li className="nav-item"><a href="" className="nav-link">Other Projects</a></li>
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
              Other projects
            </div>
          </div>
    </nav>
  )
  return html;
}
 
export default Navbar;