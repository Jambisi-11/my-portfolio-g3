import React from 'react'
import Footer from './Compenets/Footer/Footer'
import Portfolio from './Compenets/Portfolio/Portfolio'
import Blog from './Compenets/Blog/Blog'
import Resume from './Compenets/My Resume/Resume'
import Contact from './Compenets/Contact/Contact'
import Home from './Compenets/Content/Home/Home'
import Nav from './Compenets/Content/Home/Nav/Nav'
import './app.css'



import BlogInfo1 from '../../my-portfolio/src/Compenets/Blog/BlogInfo1';
import BlogInfo2 from '../../my-portfolio/src/Compenets/Blog/BlogInfo2';
import BlogInfo3 from '../../my-portfolio/src/Compenets/Blog/BlogInfo3';
import BlogInfo4 from '../../my-portfolio/src/Compenets/Blog/BlogInfo4';
import BlogInfo5 from '../../my-portfolio/src/Compenets/Blog/BlogInfo5';
import BlogInfo6 from '../../my-portfolio/src/Compenets/Blog/BlogInfo6';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
    <div className="flex justify-center items-center">
      <div className='w-[85%]'>
      {/* <Home />
      <Footer />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />   
 */}
 

      <Router>
          <Nav/>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/Resume'  element={<Resume />} />
                <Route path='/Portfolio'  element={<Portfolio/>} />
                <Route path='Blog'  element={<Blog/>} />
                <Route path='Contact'  element={<Contact/>} />
                {/* <Route path='Nav'  element={<Nav/>} /> */}

                
              <Route path="/BlogInfo1" element={<BlogInfo1 />} />
              <Route path="/BlogInfo2" element={<BlogInfo2 />} />
              <Route path="/BlogInfo3" element={<BlogInfo3 />} />
              <Route path="/BlogInfo4" element={<BlogInfo4 />} />
              <Route path="/BlogInfo5" element={<BlogInfo5 />} />
              <Route path="/BlogInfo6" element={<BlogInfo6 />} />
            </Routes>
      </Router> 
      
      <Footer /> 
    </div>
    </div>
    </div>
  )
}

export default App