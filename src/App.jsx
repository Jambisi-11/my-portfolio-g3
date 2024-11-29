import React from 'react'
import Footer from './Compenets/Footer/Footer'
import Portfolio from './Compenets/Portfolio/Portfolio'
import Blog from './Compenets/Blog/Blog'
import Resume from './Compenets/My Resume/Resume'
import Contact from './Compenets/Contact/Contact'
import Home from './Compenets/Content/Home/Home'

const App = () => {
  return (
    <div>
      <Home />
      <Footer />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  )
}

export default App