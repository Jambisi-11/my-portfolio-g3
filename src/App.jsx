import React from 'react'
import Footer from './Compenets/Footer/Footer'
import Portfolio from './Compenets/Portfolio/Portfolio'
import Blog from './Compenets/Blog/Blog'
import Resume from './Compenets/My Resume/Resume'
import Contact from './Compenets/Contact/Contact'
import Home from './Compenets/Content/Home/Home'
import Nav from './Compenets/Content/Home/Nav/Nav'
import './app.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogInfo1 from './Compenets/Blog/BlogInfo1'
import BlogInfo2 from './Compenets/Blog/BlogInfo2'
import BlogInfo3 from './Compenets/Blog/BlogInfo3'
import BlogInfo4 from './Compenets/Blog/BlogInfo4'
import BlogInfo5 from './Compenets/Blog/BlogInfo5'
import BlogInfo6 from './Compenets/Blog/BlogInfo6'

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
                <Route path='/Bloginfo1'  element={<BlogInfo1/>} />
                <Route path='/Bloginfo2'  element={<BlogInfo2/>} />
                <Route path='/Bloginfo3'  element={<BlogInfo3/>} />
                <Route path='/Bloginfo4'  element={<BlogInfo4/>} />
                <Route path='/Bloginfo5'  element={<BlogInfo5/>} />
                <Route path='/Bloginfo6'  element={<BlogInfo6/>} />
            </Routes>
      </Router> 
      
      <Footer /> 
    </div>
  )
}

export default App