import React from 'react'
import calender from '../assets/calendar.png'
import why1 from '../assets/why1.png'
import why2 from '../assets/why2.png'
import why3 from '../assets/why3.png'


const Why = () => {
  return (
   <section>

      {/* header section */}

<header className='bg-header py-44'>

<div className='max-w-5xl mx-auto container '>
   <h2 className='text-primary text-[50px] mb-2 font-bold leading-[50px]'>DESIGNING THE</h2>
   <h2  className='text-primary text-[50px] font-bold leading-[50px]'>FUTURE,</h2>
   <h2  className='text-primary text-[50px] font-bold leading-[50px]'>DELEIVERING TODAY</h2>

   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* why us */}

   <section className=' max-w-5xl container mx-auto  '>



 <h3 className='text-[150px] text-gray-200 font-bold mt-10'>WHY US</h3>

 <p className='text-primary   font-bold mb-2 text-[25px]'>We are a customer-focused and quality-driven alliance to bring your ideas to life</p>
 <p className='text-secondary text-[20px] font-bold'>We accelerate your innovative ideas to market ready products with our vast expertise and proven process.</p>



  {/* icon cards */}

<div className='mt-24  flex justify-between items-center'>

    {/* first card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Experience</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Experience matters, and ours speaks volumes. With a proven track record of successful projects spanning diverse industries, our seasoned team leverages years of hands-on experience to deliver solutions that drive tangible results.</p>
    </div>

        {/* second card */}

        <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>QUALITY </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >With an unwavering commitment to quality first, we meticulously craft each design to exceed industry standards and client expectations. We ensure precision, reliability, and innovation in every detail.</p>
    </div>


         {/* third card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={why3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>TRUST</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >We prioritize transparency, open communication, and integrity in all our interactions, fostering trust and confidence at every step of the journey. Trust is the foundation of our client relationships.</p>
    </div>



</div>


  </section>


  {/* cleints */}


  <div className='py-20 max-w-5xl mx-auto container flex space-x-20 justify-between items-center'>

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


   <section className='py-20 px-10 container mx-auto bg-[#F9F9F9] '>




 
       <h3 className='text-primary text-[45px] font-bold   '>Our Work</h3>
 

  

  


    {/* cards */}

    <div className='mt-8 flex flex-wrap  gap-1 justify-between items-center'>

<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />
<img className='rounded-xl' src="https://placehold.co/300x300" alt="" />

    </div>

  

   </section>


     {/* slogan */}

     <div className='max-w-4xl mx-auto container py-20'>
        <p className='text-primary text-[32px] leading-tight  text-lg text-center'>We strive for excellence in the entire product design & development process. While this may sound cliché, there’s a deeper meaning to it. For us,<span className='text-secondary'> “Design for excellence is not just a tagline, it's our work culture.”</span> </p>
    </div>


   </section>
  )
}

export default Why