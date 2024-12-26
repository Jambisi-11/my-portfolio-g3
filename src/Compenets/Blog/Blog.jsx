import React from 'react'
import './Blog.css'
import Nav from '../Content/Home/Nav/Nav'
import BlogImage from './BlogImage'
const Blog = () => {
  return (
    <>
    <div className='blogheader'>Blog
    <Nav/>
    </div>
    <div className='Blog'>
     <BlogImage/>  
    </div> 
    </>

  )
}

export default Blog