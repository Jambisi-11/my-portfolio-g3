import React from 'react';
import './WhatIDo.css';
import Christ from '../../../../assets/Christ.png';
import Preach from '../../../../assets/preaching.png';
import web from '../../../../assets/web.png';
import film from '../../../../assets/film.png';
import sound from '../../../../assets/sound.png';
import fashion from '../../../../assets/fashion.png';

const WhatIDo = () => {
  return (
    <section className='mb-[100px]'>
      <h3 className='font-bold underline-offset-8 mt-[90px] text-2xl'>What I Do</h3>
      <div className="grid grid-cols-3 grid-rows-2 gap-16">
           
            <div className='flex gap-12'>
                <div>
                   <img className= 'w-14 h-14' src={Christ} alt="Cross symbol representing Christianity" />
                </div>
                <div> 
                    <p className='font-bold text-xl'>Practise <br /> Christianity</p>
                </div>    
            </div>

            <div className='flex gap-12'>
              <div>
                  <img className= 'w-14 h-14' src={film} alt="Film editing icon" />
              </div>
              <div>
                 <p className='font-bold text-xl'>Film <br /> Editor</p>
              </div>  
            </div>

            <div className='flex gap-12'>
              <div>
                <img className= 'w-14 h-14' src={Preach} alt="Icon of preaching" />
              </div>
              <div>
                 <p className='font-bold text-xl'>Preach The <br /> Word of God</p>
              </div>
            </div>
      
            <div className='flex gap-12'>
              <div>
                <img className= 'w-14 h-14' src={sound} alt="Sound engineering icon" />
              </div>
              <div>
                  <p className='font-bold text-xl'>Sound <br /> Engineer</p>
              </div>  
            </div>

            <div className='flex gap-12'>
              <div> 
                <img className= 'w-14 h-14' src={web} alt="Web development icon" />
              </div>
              <div>
                  <p className='font-bold text-xl'>Web Sites &<br /> Platforms</p>
              </div>
            </div>

            <div className='flex gap-12'>
                <div>
                    <img className= 'w-14 h-14' src={fashion} alt="Fashion design icon" />
                </div>
              <div>
                  <p className='font-bold text-xl'>Fashion <br /> Designer</p>
              </div>
            </div>
          
      </div>
    </section>
  );
}

export default WhatIDo;
