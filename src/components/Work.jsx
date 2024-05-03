import React from 'react'

const Work = () => {
  return (
    <section className='py-20 px-10 container mx-auto  '>

    <div className='flex flex-col gap-4 justify-start  '>
   
   
     {/* left section */}
     
       <div>
           <h3 className='text-primary text-4xl font-bold   '>Work</h3>
       </div>
   
       {/* right section */}
   
       <div className='flex gap-2'>
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary'>Medical Services</p>
   
           </div>
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary'>IVD Instruments</p>
   
           </div>
   
   
           <div className='border-2 rounded-full  border-secondary py-2 px-4'>
               <p className='text-secondary'>Consumer Electronics</p>
   
           </div>
   
   
   
     
   
   
        
   
   
         
   
   
        
   
   
   
   
   
       </div>
   
       </div>


        {/* cards */}

        <div className='mt-8 flex  gap-2 justify-between items-center'>

<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />

        </div>

        <div className='mt-8 flex  gap-2 justify-between items-center'>

<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />
<img src="https://placehold.co/300x300" alt="" />



        </div>

       </section>
  )
}

export default Work