import React from 'react'
import './FeedBack.css'
import qmark from '../../../../assets/question.png'


const FeedBack = () => {
  return (
    <div >
        <div className='feed-title'>
           <h3 className='underline underline-offset-8'>What The People Are Saying</h3>
        </div>
            <div>
            <div className='grid grid-cols-3 gap-4' >
            <div className='flex gap-4' id='slide-1'>
              <div className=''>
                <img src = {qmark}></img>
                  <p >I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 
                  Louis L. Marin
                  Founder
              </div>
              
              <div>
                <img src = {qmark}></img>
                  <p className='flex gap-4'>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 
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

          {/* <div className='slide-2'>
          <div>
                    <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                    Louis L. Marin
                    Founder
                </div>
                
                <div>
                    <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                        Louis L. Marin
                        Founder
                </div>

                <div>
                <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                    Louis L. Marin
                    Founder
                </div> 
          </div>

          <div className='slide-3'>
                <div>
                    <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                    Louis L. Marin
                    Founder
                </div>
                
                <div>
                    <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                        Louis L. Marin
                        Founder
                </div>

                <div>
                <p>I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p> 

                    Louis L. Marin
                    Founder
                </div> 
          </div> */}
        </div>
        </div>
     
        {/* <div class="p-6">
    <h3 class="text-2xl font-bold underline underline-offset-8 mb-4">What The People Are Saying</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
            <img src="path/to/your/question-mark-image.png" alt="Quote Mark" class="mb-2 w-8 h-auto" />
            <p class="mb-2 text-gray-700">
                I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.
            </p>
            <span class="font-semibold">Louis L. Marin</span>
            <span class="text-sm text-gray-500">Founder</span>
        </div>

        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
            <img src="path/to/your/question-mark-image.png" alt="Quote Mark" class="mb-2 w-8 h-auto" />
            <p class="mb-2 text-gray-700">
                Tavonline has transformed how we do business. The efficiency it brings is unmatched.
            </p>
            <span class="font-semibold">Jane Doe</span>
            <span class="text-sm text-gray-500">CEO</span>
        </div>

        <div class="flex flex-col items-start p-4 border rounded-lg shadow-md">
            <img src="path/to/your/question-mark-image.png" alt="Quote Mark" class="mb-2 w-8 h-auto" />
            <p class="mb-2 text-gray-700">
                I can't imagine running my business without Tavonline. It's been a game changer!
            </p>
            <span class="font-semibold">John Smith</span>
            <span class="text-sm text-gray-500">Manager</span>
        </div>
    </div>
</div> */}

    </div>
  )
}

export default FeedBack