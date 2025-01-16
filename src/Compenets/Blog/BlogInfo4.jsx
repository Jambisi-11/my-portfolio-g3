import React from 'react'
import hope from '../../../src/assets/Blogpics/grow.jpg'
const BlogInfo4= () => {
  return (
    <>
    <div className='flex items-center justify-center h-11 flex-col text-white'>
    <h1 className=' '>WELCOME TO LEARN OF CHRIST</h1>
    <h2 className='infohtag2'>Study to Make Thyself Approved</h2>
    </div>
    <div>
       <img src ={ "../../../src/assets/Blogpics/grow.jpg"} className='w-50vw h-80% justify-center m-auto pl-36 pr-36 pt-10 object-cover'/> 
    </div>
    <h2 className='htag'><u><b>GROW TO MATURITY</b></u></h2>
    <p className='info'>
    As believers, our faith journey doesn’t end when we accept Jesus as Lord and Savior—it begins. Just as a seed planted in good soil is meant to grow and bear fruit, so are we called to grow in Christ. The Apostle Peter encourages us in 2 Peter 3:18, “But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To Him be glory both now and forever! Amen.”
 Growing in Jesus means becoming more like Him every day. It’s about deepening our relationship with Him, allowing His Word and Spirit to transform our hearts and minds. This growth isn’t instantaneous—it’s a lifelong process, marked by small, faithful steps of obedience and surrender.
Growing in Jesus is not about striving in our own strength but relying on His grace. Philippians 1:6 reminds us that “He who began a good work in you will carry it on to completion until the day of Christ Jesus.” Our growth is His work, and He is faithful to see it through.
So, let’s commit to grow in Him—to seek Him daily, to trust Him fully, and to live for His glory. As we do, we’ll not only experience the fullness of life He promises but also become a light to those around us, pointing them to the Savior who transforms lives. 
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

export default BlogInfo4