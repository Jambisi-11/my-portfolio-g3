import React from 'react';
import './BlogImage.css';
import { Link } from 'react-router-dom';



const BlogImage = () => {
  return (
    <>
    <div>
      <header className='header'>  
        <h2><u><b>Blog</b></u></h2>
      </header>
      </div>
    <div className='Gridcontainer'>
      <div>
        <img src={'../../../src/assets/Blogpics/hope.jpg'} className='image' alt="Eternal Hope" />
        <h2 className='htag'>ETERNAL HOPE</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo1">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      <div>
        <img src={'../../../src/assets/Blogpics/way.jpg'} className='image' alt="Jesus is the Way" />
        <h2 className='htag'>JESUS IS THE WAY</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo2">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      <div>
        <img src={'../../../src/assets/Blogpics/walk.jpg'} className='image' alt="Walk with Jesus" />
        <h2 className='htag'>WALK WITH JESUS</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo3">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      <div>
        <img src={'../../../src/assets/Blogpics/grow.jpg'} className='image' alt="Grow to Maturity" />
        <h2 className='htag'>GROW TO MATURITY</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo4">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      <div>
        <img src={'../../../src/assets/Blogpics/abide.jpeg'} className='image' alt="Abide in Him" />
        <h2 className='htag'>ABIDE IN HIM</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo5">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      <div>
        <img src={'../../../src/assets/Blogpics/eternity.jpg'} className='image' alt="Eternity in View" />
        <h2 className='htag'>ETERNITY IN VIEW</h2>
        <p className='ptag'>
          Admin/<a href="https://www.bible.com/app" target="_blank" rel="noopener noreferrer">Read Your Bible</a>/
          <Link to="/BlogInfo6">Read Blog</Link>
        </p>
        <p className='ptag'>2 January, 2025</p>
      </div>

      
    </div>
    </>
    
  );
};

export default BlogImage;