import React, { useState } from 'react';
import WhatIDo from './WhatIDo/WhatIDo'
import FeedBack from './FeedBack/FeedBack'
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
    <div className='body-cont'>
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
        
      <div className='writeup'>
          <p> I am a Missionary with the Living Seed Team, currently residing in Gboko. As a Creative Developer, I focus on interactive projects that encompass apps, VR experiences, and creative websites. I dedicate much of my time to coding outstanding projects and studying new technologies to enhance my development stack.
In addition to my work as a front-end developer, I am a full-stack engineer in the making. I specialize in media work and film editing, crafting compelling designs that come to life through transitions and animations tailored to my clients’ needs. My goal is to create fully interactive and responsive websites and apps using the most sophisticated technologies available today.
I am passionate about reaching out to youth through the world of technology, leveraging my skills to inspire and engage the next generation.</p>
  </div>

      <WhatIDo />
      <FeedBack />
       
    </div>
  )
}

export default Home