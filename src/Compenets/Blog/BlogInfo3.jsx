import React from 'react'
import hope from '../../../src/assets/Blogpics/walk.jpg'
const BlogInfo3 = () => {
  return (
    <>
    <div className='flex items-center justify-center h-11 flex-col text-white'>
    <h1 className=' '>WELCOME TO LEARN OF CHRIST</h1>
    <h2 className='infohtag2'>Study to Make Thyself Approved</h2>
    </div>
    <div>
       <img src ={"../../../src/assets/Blogpics/walk.jpg"} className='w-50vw h-80% justify-center m-auto pl-36 pr-36 pt-10 object-cover'/> 
    </div>
    <h2 className='htag'><b><u>WALK WITH JESUS </u></b></h2>
    <p className='info'>
    Walking with Jesus is more than a metaphor; it is a profound spiritual journey that transforms the heart, renews the mind, and redefines the purpose of life. For believers, this walk signifies a daily commitment to follow Christ’s teachings, embrace His love, and reflect His grace to the world. Whether you are new to the faith or seeking a deeper connection, walking with Jesus is a path that leads to peace, purpose, and eternal joy. o walk with Jesus means to live in close fellowship with Him. It’s an invitation to align your life with His example, allowing His presence to guide your thoughts, actions, and decisions. This walk is not just about attending church or performing religious rituals; it’s about cultivating a personal relationship with Christ. As Jesus Himself said in John 15:4, “Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me.”
    </p>
    <div className='formcontainer'>
  <form action="" className='form'>
    <div className='m-10'>
      <input type="text" name='First Name' placeholder='First Name' /><br />
      <input type="text" name='Middle Name' placeholder='Middle Name'/><br />
      <input type="text" name='Last Name' placeholder='Last Name'/><br/>
      <input type="text" name='Email' placeholder='Email'/><br />
     
    </div>
   
  <div>
    <textarea name="message" rows='10' cols='30'id="" className='textarea' placeholder='Leave a message'></textarea>
    
  </div>
  </form>
  <button type="button" className='button'>Submit</button>
  </div>
    </>
    
  )
}

export default BlogInfo3