import React from 'react'
import '../FeedBack/WhatPeople.css'
import qmark from '../../../../assets/question.png'

function WhatPeople() {
  return (
    
    <div>
        <h3 className='underline underline-offset-8'>What The People Are Saying</h3>
        <div className='flex gap-4' id='slide-1'>
            <div className='flex gap-4' >
                <div >
                    <img src = {qmark}></img>
                </div>
                <div>
                    <p >I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 
                    <h4>Louis L. Marin</h4>
                    <h5>Founder</h5>
                </div>
            </div>
                      
            <div>
                 <img src = {qmark}></img>
                 <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 
                 Louis L. Marin
                 Founder
            </div>
        
            <div>
                <img src = {qmark} className=''></img>
                <p >I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 
                Louis L. Marin
                Founder
            </div>
        </div>                      
    </div>
  )
}

export default WhatPeople