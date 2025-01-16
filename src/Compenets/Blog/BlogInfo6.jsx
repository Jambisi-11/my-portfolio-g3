import React from 'react'
import hope from '../../../src/assets/Blogpics/eternity.jpg'
const BlogInfo6= () => {
  return (
    <>
    <div className='flex items-center justify-center h-11 flex-col text-white'>
    <h1 className=' '>WELCOME TO LEARN OF CHRIST</h1>
    <h2 className='infohtag2'>Study to Make Thyself Approved</h2>
    </div>
    <div>
      <img src ={ "../../../src/assets/Blogpics/eternity.jpg"} className='w-50vh h-80% justify-center m-auto pl-36 pr-36 pt-10 object-cover'/> 
    </div>
    <h2 className='htag'><u><b>ETERNITY IN VIEW</b></u></h2>
    <p className='info'>
    As Christians, we are called to live with an eternal perspective. The Apostle Paul reminds us in 2 Corinthians 4:18, “So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.” This verse challenges us to look beyond the fleeting realities of this world and focus on the lasting hope of eternity with Christ.
     Living with eternity in view doesn’t mean neglecting the present; it means living with purpose, hope, and faith that extend beyond this world. It is a life anchored in the reality of God’s promises and the assurance of His eternal love.
 As we live with eternity in view, we can echo the words of Paul: “I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day” (2 Timothy 4:7-8).
 Let us live each day with eternity in our hearts, bringing glory to God and pointing others to the everlasting hope we have in Christ.
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

export default BlogInfo6