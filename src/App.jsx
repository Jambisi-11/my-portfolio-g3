import React from 'react'
import Footer from './Compenets/Footer/Footer'
import Portfolio from './Compenets/Portfolio/Portfolio'
import Blog from './Compenets/Blog/Blog'
import Resume from './Compenets/My Resume/Resume'
import Contact from './Compenets/Contact/Contact'
import Home from './Compenets/Content/Home/Home'
import './app.css'

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
                <Route path='/Porfolio'  element={<Portfolio/>} />
                <Route path='Blog'  element={<Blog/>} />
                <Route path='Contact'  element={<Contact/>} />
            </Routes>
      </Router> 
      
      <Footer /> 
    </div>
  )
}

export default App