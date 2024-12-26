import React from 'react'
import './Contact.css'
import Nav from '../Content/Home/Nav/Nav'

const Contact = () => {
  return (
    <div className='Con__Cont'>

       <form>
          <h1>Get In Touch</h1>

          <div className='Input-box'>
            <label> Full Name</label>
            <input type="text" className='field' placeholder='Enter your name' required />
          </div>
    
          <div className='Input-box'>
            <label>Email Address</label>
            <input type="Email" className='field' placeholder='Enter your email' required />
          </div>
    
          <div className='Input-box'>
            <label>Company</label>
            <input type="Email" className='field' placeholder='Enter your company' required />
          </div>
    
          <div className='Input-box'>
            <label> Your Message</label>
            <textarea name="" id="" className='Field message' placeholder='Enter your message'></textarea>
          </div>
    
      <button type='Submit'>send message</button>
    </form>
    
</div>

  )
}

export default Contact