import React from 'react'
import calender from '../assets/calendar.png';

const Hero = () => {
  return (
   <header className='bg-header py-28 xl:pt-60 xl:h-screen'>

 <div className='max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl   mx-auto container '>
    <h2 className='text-primary text-4xl  xl:text-[50px] mb-2 font-bold xl:leading-6 font-proxima'>EXECUTING INNOVATION</h2>
    <h2  className='text-primary text-4xl xl:text-[50px] font-bold'>ENHANCING CREATIVITY</h2>

    <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
            <img className='object-contain' src={calender} alt="" />
            BOOK   CONSULTATION</button>



            <div className='mt-24 flex space-x-10  xl:space-x-20 items-center'>

           <div className=''>
            <p className='text-primary text-4xl xl:text-[60px] font-semibold leading-[50px]'>70+</p>
            <p className='text-secondary xl:text-[35px]'>Projects</p>
           </div>

           
           <div className=''>
            <p className='text-primary text-4xl xl:text-[60px] font-semibold leading-[50px]'>25+</p>
            <p className='text-secondary xl:text-[35px]'>Clients</p>
           </div>




           
           <div className=''>
            <p className='text-primary text-4xl xl:text-[60px] font-semibold leading-[50px]'>10+</p>
            <p className='text-secondary xl:text-[35px]'>Sectors</p>
           </div>

            </div>
 </div>

   </header>
  )
}

export default Hero