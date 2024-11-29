import React from 'react'
import Nav from './Nav/Nav'
import WhatIDo from './WhatIDo/WhatIDo'
import FeedBack from './FeedBack/FeedBack'
import Footer from '../../Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='Main_container'>
        <Nav />
        <WhatIDo />
        <FeedBack />
        <Footer />
    </div>
  )
}

export default Home