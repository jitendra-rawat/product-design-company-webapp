import React from 'react'
import calender from '../assets/calendar.png'



import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'


import vision1 from '../assets/vision1.png'
import vision2 from '../assets/vision2.png'
import vision3 from '../assets/vision3.png'
import vision4 from '../assets/vision4.png'
import vision5 from '../assets/vision5.png'
import vision6 from '../assets/vision6.png'


import Slogan from '../components/Slogan'

import clients from '../components/Clients'


import md1 from '../assets/md1.png'
import md2 from '../assets/md2.png'
import md3 from '../assets/md3.png'
import md4 from '../assets/md4.png'
import md5 from '../assets/md5.png'
import md6 from '../assets/md6.png'


import ld1 from '../assets/ld1.png'
import ld2 from '../assets/ld2.png'
import ld3 from '../assets/ld3.png'
import ld4 from '../assets/ld4.png'
import ld5 from '../assets/ld5.png'
import ld6 from '../assets/ld6.png'


import ce1 from '../assets/ce1.png'
import ce2 from '../assets/ce2.png'
import ce3 from '../assets/ce3.png'
import ce4 from '../assets/ce4.png'
import ce5 from '../assets/ce4.png'
import ce6 from '../assets/ce4.png'



import cp1 from '../assets/cp1.png'
import cp2 from '../assets/cp2.png'
import cp3 from '../assets/cp3.png'
import cp4 from '../assets/cp4.png'
import cp5 from '../assets/cp4.png'

import a1 from '../assets/a1.png'
import Clients from '../components/Clients'
import Contact from '../components/Contact'



const WorkPage = () => {

  return (
   <section>

      {/* header section */}

      <header className='bg-header py-28 xl:py-0 xl:pt-60 xl:h-screen'>

<div className='max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto container '>
   <h2 className='text-primary text-4xl xl:text-[65px] mb-2 font-bold xl:leading-[60px]'>YOUR INNOVATION</h2>
   <h2  className='text-primary text-4xl xl:text-[65px] font-bold xl:leading-[60px]'>OUR EXECUTION</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* about */}

   <section className=' max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl container mx-auto py-16 '>



 <h3 className='text-6xl xl:text-[150px] text-gray-200 font-bold '>OUR WORK</h3>
 
 <p className='text-primary   font-bold mb-2 text-2xl xl:text-[25px]'>Dive into a world where ideas come to life</p>
 <p className='text-secondary text-base xl:text-[20px] font-bold'>Explore a curated collection of projects that reflect our commitment to pushing the envelope of design, whether it's shaping the future of Healthcare, revolutionizing consumer electronics, or enhancing the functionality of appliances.</p>






       



  </section>





    {/* Medical devices */}


    <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>


       <h3 className='text-primary text-2xl xl:text-[45px] font-bold   '>MEDICAL DEVICES</h3>


    {/* cards */}

    <div className='mt-8 bg-[#F9F9F9] flex flex-wrap space-y-4 justify-between items-center'>

<img className='rounded-xl w-[450px] object-cover' src={md1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={md2} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={md3} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={md4} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={md5} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={md6} alt="" />

    </div>

   

   </section>



    {/* life diagonistics */}

    <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>


<h3 className='text-primary text-2xl xl:text-[45px] font-bold   '>LIFE SCIENCE DIAGNOSTICS</h3>


{/* cards */}

<div className='mt-8 bg-[#F9F9F9] flex flex-wrap space-y-4 justify-between items-center'>

<img className='rounded-xl w-[450px] object-cover' src={ld1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ld2} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ld3} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ld4} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ld5} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ld6} alt="" />

</div>



</section>



  {/* consumer electronics */}

  <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>


<h3 className='text-primary text-2xl xl:text-[45px] font-bold   '>CONSUMER ELECTRONICS</h3>


{/* cards */}

<div className='mt-8 bg-[#F9F9F9] flex flex-wrap space-y-4 justify-between items-center'>

<img className='rounded-xl w-[450px] object-cover' src={ce1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ce2} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ce3} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ce4} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ce5} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={ce6} alt="" />

</div>



</section>


  {/* consumer products */}
  <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>


<h3 className='text-primary text-2xl xl:text-[45px] font-bold   '>CONSUMER PRODUCTS</h3>


{/* cards */}

<div className='mt-8 bg-[#F9F9F9] flex flex-wrap space-y-4 justify-between items-center'>

<img className='rounded-xl w-[450px] object-cover' src={cp1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={cp2} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={cp3} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={cp4} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={cp4} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={cp4} alt="" />


</div>



</section>


  {/* applicances */}

  <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>


<h3 className='text-primary text-2xl xl:text-[45px] font-bold   '>APPLIANCES</h3>


{/* cards */}

<div className='mt-8 bg-[#F9F9F9] flex flex-wrap space-y-4 justify-between items-center'>

<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />
<img className='rounded-xl w-[450px] object-cover' src={a1} alt="" />


</div>



</section>



  {/* clients  */}

 <Clients />



  {/* slogan */}

  <Slogan />


   {/* Contact */}
   

   <Contact />







   </section>
  )
}

export default WorkPage