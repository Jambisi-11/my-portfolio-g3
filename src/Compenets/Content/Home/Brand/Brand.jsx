import React from "react";
import { motion } from "framer-motion";
import bible1 from "../../../../assets/bible1.png";
import bible2 from "../../../../assets/bible2.png";
import bible3 from "../../../../assets/bible3.png";
import bible4 from "../../../../assets/bible4.png";
import bible5 from "../../../../assets/bible5.png";
import bible6 from "../../../../assets/bible6.png";
import bible7 from "../../../../assets/bible7.png";
import bible8 from "../../../../assets/bible8.png";
import bible9 from "../../../../assets/bible9.png";
import bible10 from "../../../../assets/bible10.png";

const Brand = () => {
  const images = [
    bible1,
    bible2,
    bible3,
    bible4,
    bible5,
    bible6,
    bible7,
    bible8,
    bible9,
    bible10,
  ];

  return (
    <div className="overflow-hidden relative mt-[100px] border-t-[1px] border-gray-700">
      {/* Motion Container */}
      <motion.div
        className="flex gap-[180px]"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Total animation time
          ease: "linear",
        }}
      >
        {/* Render Images Twice for Smooth Loop */}
        {[...images, ...images].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`bible-${index}`}
            className="w-[150px] h-[150px] rounded-full border-4 border-yellow-400  mt-16"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Brand;



 // <div className='flex gap-8 '>
    //     <img className='w-[150px] rounded-full' src={bible1} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full'  src={bible2} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full' src={bible3} alt='bible-image'></img>
    //     <img className='w-[150px] h-[150px] rounded-full'  src={bible4} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full' src={bible5} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full' src={bible6} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full' src={bible7} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full'  src={bible8} alt='bible-image'></img>
    //     <img className='w-[150px] rounded-full' src={bible9} alt='bible-image'></img>
    //     <img className='w-[150px] h-[150px] rounded-full' src={bible10} alt='bible-image'></img>
    // </div>