import React from 'react'
import './WhatIDo.css'
import Christ from '../../../../assets/Christ.png'
import Preach from '../../../../assets/preaching.png'
import web from '../../../../assets/web.png'
import film from '../../../../assets/film.png'
import sound from '../../../../assets/sound.png'
import fashion from '../../../../assets/fashion.png'
const WhatIDo = () => {
  return (
    <div>
      <div className='whatIdo'>
        <h3>What I Do</h3>
        <ul className='do-1'>
          <li><img src={Christ} alt="cross" />Practise Christianity</li>
          <li><img src={Preach} alt="Preach" />Preach The Word of God</li>
          <li><img src={web} alt="Web" />Web Sites and Platforms</li>
        </ul>
        <ul className='do-2'>
          <li><img src={film} alt="film" />Film Editor</li>
          <li><img src={sound} alt="sound" />Sound Engineer</li>
          <li><img src={fashion} alt="fashion" />Fashion Designer</li>
        </ul>
      </div>  
    </div>
  )
}

export default WhatIDo