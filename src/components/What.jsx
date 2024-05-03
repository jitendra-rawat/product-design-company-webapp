import React, { useState } from 'react';
import { motion } from 'framer-motion';
import what1 from '../assets/what1.png';
import what2 from '../assets/what2.png';
import what3 from '../assets/what3.png';
import what4 from '../assets/what4.png';

const What = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isHoveredFourth, setIsHoveredFourth] = useState(false);

  return (
    <section className='max-w-5xl mx-auto container py-24 my-20'>

      <h5 className='text-primary text-[40px] font-bold'>What</h5>
      <h5 className='text-primary text-[40px] font-bold'>We Do</h5>

      <div className='flex  justify-between items-center mt-12'>

    {/* first card */}

        <div
          className='relative w-[500px] h-[500px] cursor-pointer'
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
              className='absolute top-0 left-0 w-[500px] h-[500px]   bg-primary opacity-70 flex justify-center items-center z-10 my-10'
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


        {/* second card */}

        <div
          className='relative w-[500px] h-[500px] cursor-pointer'
          onMouseEnter={() => setIsHoveredSecond(true)}
          onMouseLeave={() => setIsHoveredSecond(false)}
        >

            <div className={`text-white  bg-primary text-center ${isHoveredSecond ? 'opacity-0' : 'opacity-100'}`}>
            <img src={what2} className='object-cover' alt='' />
          <div className='px-4 py-8' >
            <p className='text-[25px] font-bold'>PRODUCT DESIGN </p>
            <p className='text-[25px] font-bold'>& DEVELOPMENT</p>
            <div className='border-t border-white mt-4 max-w-xs mx-auto'></div>
            <p className='text-white text-[18px] mt-2'>
            Go beyond functionality with our world-class design expertise. We create user-centric designs that are not only aesthetic and intuitive but also strategically crafted for market success.
            </p>
          </div>
            </div>
   

          {isHoveredSecond && (
            <motion.div
              className='absolute top-0 left-0 w-[500px] h-[500px]   bg-primary opacity-70 flex justify-center items-center z-10 my-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='text-white text-center p-4'>
                <p className='text-[25px] font-bold '>PRODUCT DESIGN </p>
                <p className='text-[25px] font-bold'>& DEVELOPMENT</p>
                <div className='border-t border-white mt-4  mx-auto'></div>
           <ul className='mt-4 '>
            <li className='text-white text-[18px] mt-2'>Design Research</li>
            <li className='text-white text-[18px] mt-2'>Market AnalysisIP & Legal Support</li>
            <li className='text-white text-[18px] mt-2'>UX Development</li>
            <li className='text-white text-[18px] mt-2'>Concept Generation</li>
            <li className='text-white text-[18px] mt-2'>3D Modeling</li>
            <li className='text-white text-[18px] mt-2'>Prototype Development</li>
            <li className='text-white text-[18px] mt-2'>Product Visualization </li>
            <li className='text-white text-[18px] mt-2'>User Testing</li>
            <li className='text-white text-[18px] mt-2'>Design Validation</li>
        

           </ul>
              </div>
            </motion.div>
          )}
        </div>


      </div>

 {/* second row card */}


      
      <div className='flex  justify-between items-center mt-56'>


         {/* thir card */}
        <div
          className='relative w-[500px] h-[500px] cursor-pointer'
          onMouseEnter={() => setIsHoveredThird(true)}
          onMouseLeave={() => setIsHoveredThird(false)}
        >

            <div className={`text-white  bg-primary text-center ${isHoveredThird ? 'opacity-0' : 'opacity-100'}`}>
            <img src={what3} className='object-cover' alt='' />
          <div className='px-4 py-8' >
            <p className='text-[25px] font-bold'>ENGINEERING
 </p>
            <p className='text-[25px] font-bold'>DESIGN </p>
            <div className='border-t border-white mt-4 max-w-xs mx-auto'></div>
            <p className='text-white text-[18px] mt-2'>
            Cutting-Edge design engineering with our vast industry knowledge that promises groundbreaking innovation. We deliver tailored solutions that blend form and function seamlessly, driving success for our clients.
            </p>
          </div>
            </div>
   

          {isHoveredThird && (
            <motion.div
              className='absolute top-0 left-0 w-[500px] h-[500px]   bg-primary opacity-70 flex justify-center items-center z-10 my-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='text-white text-center p-4'>
                <p className='text-[25px] font-bold '>ENGINEERING
</p>
                <p className='text-[25px] font-bold'>DESIGN </p>
                <div className='border-t border-white mt-4  mx-auto'></div>
           <ul className='mt-4 '>
            <li className='text-white text-[18px] mt-2'>Multi-Disciplinary Engineering</li>
            <li className='text-white text-[18px] mt-2'>CAD/CAE/DFMA</li>
            <li className='text-white text-[18px] mt-2'>Prototype Build and Testings</li>
            <li className='text-white text-[18px] mt-2'>Risk Mitigation</li>
            <li className='text-white text-[18px] mt-2'>VAVE</li>
            <li className='text-white text-[18px] mt-2'>3D Scanning</li>
            <li className='text-white text-[18px] mt-2'>Reverse Engineering </li>
            <li className='text-white text-[18px] mt-2'>Re-Engineering</li>
            <li className='text-white text-[18px] mt-2'>Material Selection</li>
        

           </ul>
              </div>
            </motion.div>
          )}
        </div>


        {/* fourth card */}

        <div
          className='relative w-[500px] h-[500px] cursor-pointer'
          onMouseEnter={() => setIsHoveredFourth(true)}
          onMouseLeave={() => setIsHoveredFourth(false)}
        >

            <div className={`text-white  bg-primary text-center ${isHoveredFourth ? 'opacity-0' : 'opacity-100'}`}>
            <img src={what4} className='object-cover' alt='' />
          <div className='px-4 py-8' >
            <p className='text-[25px] font-bold'>MANUFACTURE
 </p>
            <p className='text-[25px] font-bold'>ENGINEERING</p>
            <div className='border-t border-white mt-4 max-w-xs mx-auto'></div>
            <p className='text-white text-[18px] mt-2'>
            With a focus on enhancing product quality, our team ensures that designs are manufacturable at scale. By bridging the gap between design and production, we help our clients bring their ideas to life with precision and reliability. 
            </p>
          </div>
            </div>
   

          {isHoveredFourth && (
            <motion.div
              className='absolute top-0 left-0 w-[500px] h-[500px]   bg-primary opacity-70 flex justify-center items-center z-10 my-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='text-white text-center p-4'>
                <p className='text-[25px] font-bold '>MANUFACTURE</p>
                <p className='text-[25px] font-bold'>ENGINEERING</p>
                <div className='border-t border-white mt-4  mx-auto'></div>
           <ul className='mt-4 '>
            <li className='text-white text-[18px] mt-2'>Transfer to Manufacturer</li>
            <li className='text-white text-[18px] mt-2'>DHF & DMR Preparation</li>
            <li className='text-white text-[18px] mt-2'>Production Set-Up</li>
            <li className='text-white text-[18px] mt-2'>Pilot Production</li>
            <li className='text-white text-[18px] mt-2'>Pre-Production Runs</li>
            <li className='text-white text-[18px] mt-2'>Master Production Planning</li>
            <li className='text-white text-[18px] mt-2'>Mass Production Runs </li>
            <li className='text-white text-[18px] mt-2'>Scale-Up</li>
            <li className='text-white text-[18px] mt-2'>QARA</li>
        

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
