import React from 'react'
import calender from '../assets/calendar.png'
import services1 from '../assets/service1.png'
import services2 from '../assets/service2.png'
import services3 from '../assets/service3.png'

import Contact from '../components/Contact'





const ContactPage = () => {

  return (
   <section>

      {/* header section */}

<header className='bg-header py-44'>

<div className='max-w-5xl mx-auto container '>
   <h2 className='text-primary text-[50px] mb-2 font-bold leading-[50px]'>Your Growth Journey  </h2>
   <h2  className='text-primary text-[50px] font-bold leading-[50px]'>Starts Here!</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* contact */}

   <section className=' max-w-5xl container mx-auto  '>



 <h3 className='text-[150px] text-gray-200 font-bold mt-10'>CONTACT US</h3>

 <p className='text-primary   font-bold mb-2 text-[25px]'>Partner with us and unlock the potential of your next project.</p>
 <p className='text-secondary text-[20px] font-bold'>Join us on this journey of creativity, where every project tells a story of collaboration, passion, and relentless pursuit of excellence.</p>



  {/* icon cards */}

<div className='mt-20 py-10  flex justify-between items-center '>

    {/* first card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={services1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>innovative
solutions</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Our studio specializes in delivering innovative design solutions tailored to the unique needs and challenges of our clients. By combining creativity with technical expertise, we conceptualize and develop products that stand out in the market, captivate consumers, and drive business growth</p>
    </div>

        {/* second card */}

        <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={services2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Efficient Development </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >We streamline the product development process, saving our clients time, resources, and effort. From initial ideation to final production, we employ efficient workflows and utilize advanced technologies to accelerate project timelines without compromising quality. </p>
    </div>


         {/* third card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={services3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Comprehensive Expertise</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >With a multidisciplinary team of industrial designers, engineers, and strategists, our studio offers comprehensive expertise across all stages of the design process. Whether it's product design, user experience optimization, or manufacturing support, we have the skills and knowledge to deliver holistic solutions that meet our clients' objectives.</p>
    </div>



</div>


   <div className='mt-40 boredr-t border border-secondary'></div>




       



  </section>




     {/* lets connect */}

     <Contact />








   </section>
  )
}

export default ContactPage