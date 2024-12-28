import React from 'react'
import './BlogImage.css'
const BlogImage = () => {
  return (
    
    <div className='Gridcontainer'>
        <div>
            <img src={'../../../src/assets/Blogpics/hope.jpg'} className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <a href="BlogInfo1.jsx"><h2>ETERNAL HOPE</h2></a>
        </div>
        <div>
            <img src={'../../../src/assets/Blogpics/way.jpg'}className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <h2>JESUS IS THE WAY</h2>
        </div>
        <div>
            <img src={'../../../src/assets/Blogpics/walk.jpg'}className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <h2>WALK WITH JESUS</h2>
        </div>
        <div>
            <img src={'../../../src/assets/Blogpics/grow.jpg'}className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <h2>GROW TO MATURITY</h2>
        </div>
        <div>
            <img src={'../../../src/assets/Blogpics/abide.jpeg'}className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <h2>ABIDE IN HIM</h2>
        </div>
        <div>
            <img src={'../../../src/assets/Blogpics/eternity.jpg'}className='image'/>
            <p className='word'>Admin/<a href="https://www.bible.com/app">Read Your Bible</a>/Talk to Someone</p>
            <h2>ETERNITY IN VIEW</h2>
        </div>
    </div>
    

   
  )
}

export default BlogImage