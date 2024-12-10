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
          <p>I'm a Creative Developer for interactive projects that usually are apps, VR and Creative websites. I Spend most of time coding outstanding projects or studying new technologies. to improve my development stack. I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.  (in the above writeup,  edit this for me with my deteails. I am a Missionary, labouring with Living Seed Team. currently living in Gboko. I am into media work, film editor and also a front end developer, full stack enginner in making. wishing to reachout to youth through the world of technology )</p>
      </div>

      <WhatIDo />
      <FeedBack />
       
    </div>
  )
}

export default Home