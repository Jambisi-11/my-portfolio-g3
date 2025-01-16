import React from 'react'
import './Contact.css'
import Nav from '../Content/Home/Nav/Nav'

const Contact = () => {
  return (
    <div className='Con__Cont'>
          <h3 className='font-bold underline-offset-8 mt-[50px] text-2xl'>Get In Touch</h3>
      <div className='flex gap-4'>
          <div className='w-[47%]'> 
            <h4 className='text-gray-400 text-xl'>Write me</h4>
            <h4 className='font-bold text-2xl mt-8 mb-8'>Jambis.banji@yahoo.com</h4>
            <h4 className='text-gray-300 text-xl mt-6 mb-6'>My office</h4>
            <h4 className='text-gray-300 text-xl'>Media Department, Peace House camp, Aliade Road,<br></br>Gboko, Nigeria.</h4>
            <h4 className='text-gray-300 text-xl mt-14 mb-6'>Follow us</h4>
          </div>

          <div className='w-[47%]'>
          <h4 className='text-gray-400 text-xl ml-4'>Or fill this form</h4>

          <form className="max-w-lg  bg-black p-6 space-y-6">
  
              <div className="flex flex-col gap-2">
              
                <input
                  type="text"
                  className="w-full placeholder-white bg-black text-white font-bold text-xl py-2 border-b border-white focus:outline-none "
                  placeholder="Your name"
                  required
                />
              </div>


              <div className="flex flex-col gap-2">
              
                <input
                  type="email"
                  className="w-full  placeholder-white bg-black  text-white font-bold text-xl  py-2 border-b border-gray-300 focus:outline-none"
                  placeholder="Your email"
                  required
                />
              </div>

            
              <div className="flex flex-col gap-2">
              
                <input
                  type="text"
                  className="w-full  placeholder-white bg-black  text-white font-bold text-xl  py-2 border-b border-gray-300 focus:outline-none "
                  placeholder="Your company"
                  required
                />
              </div>


              <div className="flex flex-col gap-2">
              
                <textarea
                  className="w-full  placeholder-white bg-black text-white font-bold text-xl  py-2 border-b border-gray-300 focus:outline-none"
                  rows="4"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>

              
              <button
                type="submit"
                className="w-[90px] bg-white text-black  py-2 px- rounded-3xl hover:bg-blue-600"
              >
                Send
              </button>
            </form>

      </div>
  </div>
</div>

  )
}

export default Contact