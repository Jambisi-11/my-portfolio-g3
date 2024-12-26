import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu_logo from "../../../../assets/menu logo.png";
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hidemenu = () => {
    setIsMenuOpen(false);
  };

  const menyStylek = (item) => {
    setSelectedItem(item); 
    hidemenu(); 
  };

  return (
    <div className='nav__circle'>
      <img src={menu_logo} alt="Navigation menu" onClick={toggleMenu} style={{ cursor: 'pointer' }} />
      <div className='list'>
        {isMenuOpen && (
          <div className='menu-tab'>
            <ul>
              <li>
                <Link 
                  to="/" 
                  onClick={() => menyStylek('Home')} 
                  style={selectedItem === 'Home' ? { textDecoration: 'line-through' } : {}}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/Resume" 
                  onClick={() => menyStylek('Resume')} 
                  style={selectedItem === 'Resume' ? { textDecoration: 'line-through' } : {}}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link 
                  to="/Portfolio" 
                  onClick={() => menyStylek('Portfolio')} 
                  style={selectedItem === 'Portfolio' ? { textDecoration: 'line-through' } : {}}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/Blog" 
                  onClick={() => menyStylek('Blog')} 
                  style={selectedItem === 'Blog' ? { textDecoration: 'line-through' } : {}}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => menyStylek('Contact')} 
                  style={selectedItem === 'Contact' ? { textDecoration: 'line-through' } : {}}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
