import React from 'react'

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

        <div className='mt-8 flex flex-wrap  gap-1 justify-between items-center'>

<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />

        </div>

        <div className='mt-8 flex flex-wrap  gap-1 justify-between items-center'>

<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />



        </div>

       </section>
  )
}

export default Work