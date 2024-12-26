import React from 'react'
import Footer from './Compenets/Footer/Footer'
import Portfolio from './Compenets/Portfolio/Portfolio'
import Blog from './Compenets/Blog/Blog'
import Resume from './Compenets/My Resume/Resume'
import Contact from './Compenets/Contact/Contact'
import Home from './Compenets/Content/Home/Home'
import Nav from './Compenets/Content/Home/Nav/Nav'
import './app.css'
import BlogInfo2 from './Compenets/Blog/BlogInfo2'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <Home />
      <Footer />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />   
 */}

      <Router>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/Resume'  element={<Resume />} />
                <Route path='/Portfolio'  element={<Portfolio/>} />
                <Route path='Blog'  element={<Blog/>} />
                <Route path='Contact'  element={<Contact/>} />
                <Route path='Nav'  element={<Nav/>} />
                <Route path='Bloginfo2'  element={<BlogInfo2/>} />
            </Routes>
      </Router> 
      
      <Footer /> 
    </div>
  )
}

export default App