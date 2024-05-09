import React from 'react'
import calender from '../assets/calendar.png'
import why1 from '../assets/why1.png'
import why2 from '../assets/why2.png'
import why3 from '../assets/why3.png'

import Slogan from '../components/Slogan'
import OurWork from '../components/OurWork'

import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'
import work7 from '../assets/work7.png'





const Why = () => {
  return (
   <section>

      {/* header section */}

      <header className='bg-header pt-60 h-screen'>

<div className='max-w-6xl mx-auto container '>
   <h2 className='text-primary text-[65px] mb-2 font-bold leading-[60px]'>DESIGNING THE </h2>
   <h2 className='text-primary text-[65px] mb-2 font-bold leading-[60px]'>FUTURE </h2>
   <h2  className='text-primary text-[65px] font-bold leading-[60px]'>DELIVERING TODAY</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* why us */}

   <section className=' max-w-6xl container mx-auto  '>



 <h3 className='text-[150px] text-gray-200 font-bold mt-10'>WHY US</h3>

 <p className='text-primary   font-bold mb-2 text-[25px]'>We are a customer-focused and quality-driven alliance to bring your ideas to life</p>
 <p className='text-secondary text-[20px] font-bold'>We accelerate your innovative ideas to market ready products with our vast expertise and proven process.</p>



  {/* icon cards */}

<div className='mt-32  flex justify-between items-center'>

    {/* first card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Experience</h5>
<p className=' text-primary text-[20px] font-bold mt-4 leading-snug' >Experience matters, and ours speaks volumes. With a proven track record of successful projects spanning diverse industries, our seasoned team leverages years of hands-on experience to deliver solutions that drive tangible results.</p>
    </div>

        {/* second card */}

        <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>QUALITY </h5>
<p className=' text-primary text-[20px] font-bold mt-4 leading-snug' >With an unwavering commitment to quality first, we meticulously craft each design to exceed industry standards and client expectations. We ensure precision, reliability, and innovation in every detail.</p>
    </div>


         {/* third card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>TRUST</h5>
<p className=' text-primary text-[20px] font-bold mt-4 leading-snug' >We prioritize transparency, open communication, and integrity in all our interactions, fostering trust and confidence at every step of the journey. Trust is the foundation of our client relationships.</p>
    </div>



</div>


<div className='border-t-2 border-secondary my-20'></div>
  </section>


  {/* projects */}


  <div className=' max-w-2xl mx-auto container flex space-x-20 justify-between items-center'>

<div className=''>
 <p className='text-primary text-[60px] font-semibold leading-[50px]'>70+</p>
 <p className='text-secondary text-[35px]'>Projects</p>
</div>


<div className=''>
 <p className='text-primary text-[60px] font-semibold leading-[50px]'>25+</p>
 <p className='text-secondary text-[35px]'>Clients</p>
</div>





<div className=''>
 <p className='text-primary text-[60px] font-semibold leading-[50px]'>10+</p>
 <p className='text-secondary text-[35px]'>Sectors</p>
</div>

 </div>


   {/* our work */}

 <OurWork />


     {/* slogan */}
<Slogan />


   </section>
  )
}

export default Why