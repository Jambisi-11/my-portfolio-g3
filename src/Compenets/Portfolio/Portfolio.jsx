import React from 'react';
import './Portfolio.css';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import video from '../../assets/port3.mp4';
import port4 from '../../assets/port4.png';
import port5 from '../../assets/port5.png';
import port6 from '../../assets/port6.png';
import port7 from '../../assets/port7.png';
import port8 from '../../assets/port8.png';
import port9 from '../../assets/port9.png';

const Portfolio = () => {
  const media = [
    { type: 'image', src: port1, alt: 'port-pic' },
    { type: 'image', src: port2, alt: 'port-pic' },
    { type: 'video', src: video, alt: 'port-video' },
    { type: 'image', src: port4, alt: 'port-pic' },
    { type: 'image', src: port5, alt: 'port-pic' },
    { type: 'image', src: port6, alt: 'port-pic' },
    { type: 'image', src: port7, alt: 'port-pic' },
    { type: 'image', src: port8, alt: 'port-pic' },
    { type: 'image', src: port9, alt: 'port-pic' },
  ];

  return (
    <div className="flex justify-center items-center">
    <div className='w-[90%]'>
      <h3 className='font-bold underline-offset-8 mt-[50px] text-2xl'>Portfolio</h3>
      <div>
        <ul className='flex gap-8 text-xl'>
          <li>All Works</li>
          <li>Photography</li>
          <li>Branding</li>
          <li>Other</li>
        </ul>
        <div className='grid grid-cols-3 gap-8 mt-16'>
          {media.map((item, index) =>
            item.type === 'image' ? (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className='w-full h-[270px] rounded-lg border border-gray-300'
              />
            ) : (
              <video
                key={index}
                src={item.src}
                controls
                className='w-full h-[270px] rounded-lg border border-gray-300'
                autoPlay
                loop
                muted
              />
            )
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
