import React from 'react';
import './Blog.css';
import BlogImage from './BlogImage';


// import BlogInfo1 from '../Blog/BlogInfo1';
// import BlogInfo2 from '../Blog/BlogInfo2';
// import BlogInfo3 from '../Blog/BlogInfo3';
// import BlogInfo4 from '../Blog/BlogInfo4';
// import BlogInfo5 from '../Blog/BlogInfo5';
// import BlogInfo6 from '../Blog/BlogInfo6';

// import { Routes, Route } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className='blog'>
        <div className='Blog'>
          <BlogImage /> 
        </div>
        {/* <Routes>
          <Route path="/" element={<BlogImage />} />
          <Route path="/BlogInfo1" element={<BlogInfo1 />} />
          <Route path="/BlogInfo2" element={<BlogInfo2 />} />
          <Route path="/BlogInfo3" element={<BlogInfo3 />} />
          <Route path="/BlogInfo4" element={<BlogInfo4 />} />
          <Route path="/BlogInfo5" element={<BlogInfo5 />} />
          <Route path="/BlogInfo6" element={<BlogInfo6 />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Blog;
