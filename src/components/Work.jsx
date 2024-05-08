import React from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'
import work7 from '../assets/work7.png'


const Work = () => {
  return (
    <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>

    <div className='flex flex-col gap-4 justify-start  '>
   
   
     {/* left section */}
     
       <div>
           <h3 className='text-primary text-[45px] font-bold   '>Work</h3>
       </div>
   
       {/* right section */}
   
       <div className='flex gap-2'>
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary text-base'>Medical Services</p>
   
           </div>
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary text-base'>IVD Instruments</p>
   
           </div>
   
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary text-base'>Consumer Electronics</p>
   
           </div>
   
   
   
     
   
   
        
   
   
         
   
   
        
   
   
   
   
   
       </div>
   
       </div>


        {/* cards */}

        <div className='mt-8 flex flex-wrap   justify-between items-center'>

<img  className='rounded-xl w-[350px] h-[350px] object-contain' src={work2} alt="" />
<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work2} alt="" />
<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work3} alt="" />
<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work4} alt="" />

        </div>



 <div className='mt-8 flex flex-wrap  gap-1 justify-between items-center'>

<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work5} alt="" />
<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work6} alt="" />
<img className='rounded-xl w-[350px] h-[350px] object-contain' src={work7} alt="" />
<div className='rounded-xl w-[350px] h-[350px] bg-primary flex justify-center items-center'>
    <p className='text-[30px] text-white  font-bold'>View All</p>

</div>



        </div>

       </section>
  )
}

export default Work