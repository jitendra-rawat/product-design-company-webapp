import React, { useState } from 'react';
import { motion } from 'framer-motion';
import what1 from '../assets/what1.png';
import what2 from '../assets/what2.png';
import what3 from '../assets/what3.png';
import what4 from '../assets/what4.png';

const What = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='max-w-5xl mx-auto container py-24 my-20'>
      <h5 className='text-primary text-[40px] font-bold'>What</h5>
      <h5 className='text-primary text-[40px] font-bold'>We Do</h5>

      <div className='flex justify-between items-center mt-12'>
        <div
          className='relative w-[500px] h-[400px] cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

            <div className={`text-white  bg-primary text-center ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <img src={what1} className='object-cover' alt='' />
          <div className='px-4 py-8' >
            <p className='text-[25px] font-bold'>INCUBATION SUPPORT</p>
            <p className='text-[25px] font-bold'>FOR STARTUPS AND MSMEs</p>
            <div className='border-t border-white mt-4 max-w-xs mx-auto'></div>
            <p className='text-white text-[18px] mt-2'>
              A launchpad to transform and execute your ideas with our support and expertise. Turn your dreams into reality with truly being designed, developed, and made in India.
            </p>
          </div>
            </div>
   

          {isHovered && (
            <motion.div
              className='absolute top-0 left-0 w-[500px] h-[480px]   bg-primary opacity-70 flex justify-center items-center z-10 my-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='text-white text-center p-4'>
                <p className='text-[25px] font-bold '>INCUBATION SUPPORT</p>
                <p className='text-[25px] font-bold'>FOR STARTUPS AND MSMEs</p>
                <div className='border-t border-white mt-4  mx-auto'></div>
           <ul className='mt-4 '>
            <li className='text-white text-[18px] mt-2'>Development Infrastructure</li>
            <li className='text-white text-[18px] mt-2'>IP & Legal Support</li>
            <li className='text-white text-[18px] mt-2'>Investor Relations</li>
            <li className='text-white text-[18px] mt-2'>POC & MVP Construction</li>
            <li className='text-white text-[18px] mt-2'>Technical Infrastructure</li>
            <li className='text-white text-[18px] mt-2'>Mentorship & Feedback</li>
            <li className='text-white text-[18px] mt-2'>Expert GuidanceList </li>
            <li className='text-white text-[18px] mt-2'>Testing & Validation</li>
            <li className='text-white text-[18px] mt-2'>Networking Opportunities</li>
        

           </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default What;
