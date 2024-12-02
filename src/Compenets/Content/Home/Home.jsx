import React, { useState } from 'react';
import Nav from './Nav/Nav'
import WhatIDo from './WhatIDo/WhatIDo'
import FeedBack from './FeedBack/FeedBack'
import Footer from '../../Footer/Footer'
import './Home.css'
import img from '../../../assets/pro.png'
import menu_logo from "../../../assets/menu logo.png"
import { Link } from 'react-router-dom'
import at from '../../../assets/@logo.png'
import dob from '../../../assets/dob.png'
import navigation from '../../../assets/navigation.png'
import whats from '../../../assets/whats.png'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div> 
    <div className='Main_container'>
      <div className='image__container'>
        <img  src={img}></img> 
      </div>

      <div>
          <div className='second_cont'>
              <div className='cont_cont'>
                  <p>Hello Everyone 👋</p>
                  <h3>I'm Ajide O. James</h3>
                  <h3>I am a <span id='word_effect'>Missionary</span></h3>
              </div>
            <div className='nav__circle' id='nav_icon'>
              <div onClick={toggleMenu} >
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
           </div>
            <div className='details'>
                <div><img src={dob} alt="dob" />11.02.1989</div>
                <div><img src={whats} alt="whatsapp number" />2347032398646</div>
                <div><img src={at} alt="email" />jambis.banji@yahoo.com</div> 
            </div>
            <div className='local'><img src={navigation} alt="Location" />Gboko, Benue State, Nigeria</div>
      </div>
    </div> 
        
        {/* <Nav /> */}
        <WhatIDo />
        <FeedBack />
        {/* <Footer /> */}
    </div>
  )
}

export default Home