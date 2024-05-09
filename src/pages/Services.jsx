import React from 'react'
import calender from '../assets/calendar.png'
import services1 from '../assets/service1.png'
import services2 from '../assets/service2.png'
import services3 from '../assets/service3.png'

import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.png'
import s9 from '../assets/s9.png'
import s10 from '../assets/s10.png'
import s11 from '../assets/s11.png'
import s12 from '../assets/s12.png'

import si1 from '../assets/si1.png'
import si2 from '../assets/si2.png'
import si3 from '../assets/si3.png'
import si4 from '../assets/si4.png'
import si5 from '../assets/si5.png'
import si6 from '../assets/si6.png'
import si7 from '../assets/si7.png'
import si8 from '../assets/si8.png'
import si9 from '../assets/si9.png'
import si10 from '../assets/si10.png'
import si11 from '../assets/si11.png'
import si12 from '../assets/si12.png'


import Slogan from '../components/Slogan'
import OurWork from '../components/OurWork'



const Services = () => {
  return (
   <section>

      {/* header section */}

      <header className='bg-header pt-60 h-screen'>

<div className='max-w-6xl mx-auto container '>
   <h2 className='text-primary text-[65px] mb-2 font-bold leading-[60px]'>EMPOERING INNOVTORS</h2>
   <h2  className='text-primary text-[65px] font-bold leading-[60px]'>DESIGNING DREAMS</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* services */}

   <section className=' max-w-5xl container mx-auto  '>



 <h3 className='text-[150px] text-gray-200 font-bold mt-10'>SERVICES</h3>

 <p className='text-primary   font-bold mb-2 text-[25px]'>We take your ideas to Market</p>
 <p className='text-secondary text-[20px] font-bold'>InnoCreate is a group of passionate individuals united in our mission to deliver great sustainable products, make a positive impact on human lives and have fun along the way.</p>



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


   <div className='mt-36 boredr-t border-2 border-secondary'></div>



     {/* service cards */}


   <div className='flex flex-wrap space-y-8 justify-between items-center py-20'>

    {/* first card */}

    <div className='w-[300px]'>

        <img className='' src={s1} alt="" />
        <div className='bg-primary p-4'>
            <img className='mx-auto ' src={si1} alt="" />
            <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

        </div>

    </div>


     {/* second card */}

     <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>



 {/* third card */}

 <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


 {/* fourth card */}

 <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


 {/* fifth card */}

 <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


 {/* sizth card */}

 <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>



  {/* first card */}

  <div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
    <img className='mx-auto ' src={si1} alt="" />
    <p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


{/* second card */}

<div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si1} alt="" />
<p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>



{/* third card */}

<div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si1} alt="" />
<p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


{/* fourth card */}

<div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si1} alt="" />
<p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


{/* fifth card */}

<div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si1} alt="" />
<p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>


{/* sizth card */}

<div className='w-[300px]'>

<img className='' src={s1} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si1} alt="" />
<p className='text-[25px] text-white text-center'>PROJECT 
CONSULTATION</p>

</div>

</div>




   </div>
       



  </section>







   {/* our work */}


  <OurWork />

     {/* slogan */}

   <Slogan />


   </section>
  )
}

export default Services