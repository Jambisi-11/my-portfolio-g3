import React from 'react'
import './Blog.css'
import BlogImage from './BlogImage'
const Blog = () => {
  return (
    <>
    {/* <div className='blogheader'>Blog
    <Nav />
    </div>  */}
    <div>
     <BlogImage/>  
    </div> 
    <div>
        <div className='blog'>
            <div className='Blog'>
            <BlogImage/>  
            </div> 
        </div>
    </div>
    </div>
    </>

  )
}

export default Blog