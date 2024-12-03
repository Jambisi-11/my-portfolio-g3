import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu_logo from "../../../../assets/menu logo.png";
import './Nav.css' 

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav__circle' id='nav_icon'>
      <div onClick={toggleMenu}>
        <img src={menu_logo} alt="Navigation menu" />
      </div>
      <div className='list'>
        {isMenuOpen && (
          <div className='menu-tab'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li><Link to="/Portfolio">Portfolio</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;