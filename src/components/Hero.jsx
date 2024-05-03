import React from 'react'
import calender from '../assets/calendar.png';

const Hero = () => {
  return (
   <header className='bg-header py-44'>

 <div className='max-w-5xl mx-auto container '>
    <h2 className='text-primary text-5xl mb-2'>EXECUTING INNOVATION</h2>
    <h2  className='text-primary text-5xl font-semibold'>ENHANCING CREATIVITY</h2>

    <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
            <img className='object-contain' src={calender} alt="" />
            BOOK   CONSULTATION</button>



            <div className='mt-24 flex  items-center'>

           <div className='w-48'>
            <p className='text-primary text-4xl'>70+</p>
            <p className='text-secondary text-2xl'>Projects</p>
           </div>

           
           <div className='w-48'>
            <p className='text-primary text-4xl'>25+</p>
            <p className='text-secondary text-2xl'>Clients</p>
           </div>




           
           <div className='w-48'>
            <p className='text-primary text-4xl'>10+</p>
            <p className='text-secondary text-2xl'>Sectors</p>
           </div>

            </div>
 </div>

   </header>
  )
}

export default Hero