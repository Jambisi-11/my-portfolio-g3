import React from 'react'
import way from "../../../src/assets/Blogpics/way.jpg"
const BlogInfo2 = () => {
  return (
    <>
    <div className='flex items-center justify-center h-11 flex-col text-white'>
    <h1 className=' '>WELCOME TO LEARN OF CHRIST</h1>
    <h2 className='infohtag2'>Study to Make Thyself Approved</h2>
    </div>
    <div>
        <img src={"../../../src/assets/Blogpics/way.jpg"} className='w-50vw h-80% justify-center m-auto p-10 object-cover'/>
    </div>
    <h2 className='htag'><u><b>JESUS IS THE WAY</b></u></h2>
    <p className='info'>
    Jesus Is the Way
        In John 14:6, Jesus declared, "I am the way, the truth, and the life. No one comes to the Father except through Me." These words are both an invitation and a profound truth that has echoed through the centuries.
        When Jesus says He is "the way," He is showing us that He is the bridge between humanity and God. In a world often filled with confusion, sin, and brokenness, Jesus offers a clear path to reconciliation with the Father. He doesn’t just point us to the way; He is the way—through His life, death, and resurrection.
        This truth is transformative. Jesus isn’t merely one option among many; He is the only way to eternal life (Acts 4:12). His sacrifice on the cross paid the debt for our sins, and His resurrection triumphed over death, ensuring that we can live in fellowship with God forever.      
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

export default BlogInfo2
