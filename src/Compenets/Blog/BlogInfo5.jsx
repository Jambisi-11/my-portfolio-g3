import React from 'react'
import hope from '../../../src/assets/Blogpics/abide.jpeg'

const BlogInfo5= () => {
  return (
    <>
    <div className='flex items-center justify-center h-11 flex-col text-white'>
    <h1 className=' '>WELCOME TO LEARN OF CHRIST</h1>
    <h2 className='infohtag2'>Study to Make Thyself Approved</h2>
    </div>
    <div>
       <img src = {"../../../src/assets/Blogpics/abide.jpeg"}className='w-full h-80% justify-center m-auto pl-36 pr-36 pt-10 object-cover'/> 
    </div>
    <h2 className='htag'><u><b>ABIDE IN HIM</b></u></h2>
    <p className='info'>
    In John 15:5, Jesus declares, “I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me, you can do nothing.” These words reveal a profound truth about the Christian life: our spiritual vitality, growth, and fruitfulness come only through abiding in Jesus.
 The image of the vine and branches paints a picture of intimacy, dependence, and connection. Just as a branch cannot survive or produce fruit apart from the vine, we cannot thrive spiritually without a close relationship with Christ. To abide in Him means to remain steadfastly connected to Him, drawing our strength, guidance, and purpose from Him.
 When we abide in Christ, His life flows through us. We experience His peace in trials, His strength in weakness, and His joy in all circumstances. Abiding transforms our relationship with God from religion into a vibrant, life-giving connection.
 But Jesus also gives a sobering reminder: “Apart from me, you can do nothing.” When we attempt to live apart from Christ, we wither spiritually, unable to bear fruit or fulfill the purpose He has for us. Abiding in Him is not optional; it is essential for a flourishing Christian life.
 Jesus invites each of us to abide in Him daily. This is not about striving in our own strength but about resting in His grace, trusting in His promises, and walking in step with His Spirit.
 As we abide in Christ the Vine, we will not only bear much fruit for His glory but also experience the fullness of life He has promised (John 10:10). Let us remain steadfastly connected to Him, knowing that He is our source, our sustainer, and our Savior.
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

export default BlogInfo5