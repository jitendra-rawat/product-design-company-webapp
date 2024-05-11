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

      <header className='bg-header py-28 xl:pt-60 xl:h-screen'>

<div className='max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl  2xl:max-w-6xl mx-auto container '>
   <h2 className='text-primary text-5xl xl:text-[65px] mb-2 font-bold xl:leading-[60px]'>EMPOERING INNOVTORS</h2>
   <h2  className='text-primary text-5xl xl:text-[65px] font-bold xl:leading-[60px]'>DESIGNING DREAMS</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* services */}

   <section className=' max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl  2xl:max-w-6xl container mx-auto  '>



 <h3 className='text-6xl xl:text-[150px] text-gray-200 font-bold mt-10'>SERVICES</h3>

 <p className='text-primary   font-bold mb-2 text-xl xl:text-[25px]'>We take your ideas to Market</p>
 <p className='text-secondary text-base xl:text-[20px] font-bold'>InnoCreate is a group of passionate individuals united in our mission to deliver great sustainable products, make a positive impact on human lives and have fun along the way.</p>



  {/* icon cards */}

<div className='mt-20 py-10  flex flex-wrap  space-y-20 justify-between items-center '>

    {/* first card */}

    <div className='w-[300px] xl:w-[280px]  h-[400px]'>
<img className='w-[80px] h-[80px] object-cover' src={services1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-6  uppercase leading-none'>innovative
solutions</h5>
<p className=' text-primary text-[20px] font-bold mt-8 leading-snug' >Our studio specializes in delivering innovative design solutions tailored to the unique needs and challenges of our clients. By combining creativity with technical expertise, we conceptualize and develop products that stand out in the market, captivate consumers, and drive business growth</p>
    </div>

        {/* second card */}

        <div className='w-[300px] xl:w-[280px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={services2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-6 leading-none'>Efficient Development </h5>
<p className=' text-primary text-[20px] font-bold mt-8 leading-snug' >We streamline the product development process, saving our clients time, resources, and effort. From initial ideation to final production, we employ efficient workflows and utilize advanced technologies to accelerate project timelines without compromising quality. </p>
    </div>


         {/* third card */}

    <div className='w-[300px] xl:w-[280px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={services3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-6 leading-none'>Comprehensive Expertise</h5>
<p className=' text-primary text-[20px] font-bold mt-8 leading-snug' >With a multidisciplinary team of industrial designers, engineers, and strategists, our studio offers comprehensive expertise across all stages of the design process. Whether it's product design, user experience optimization, or manufacturing support, we have the skills and knowledge to deliver holistic solutions that meet our clients' objectives.</p>
    </div>



</div>


   <div className='mt-48 boredr-t border border-secondary'></div>



     {/* service cards */}


   <div className='mt-24 flex flex-wrap gap-y-16 justify-between items-center py-20'>


    {/* first card */}

    <div className='w-[350px] h-[450px]'>

        <img className='w-[350px] h-[250px] object-cover' src={s1} alt="" />
        <div className='bg-primary p-8'>
            <img className='mx-auto ' src={si1} alt="" />
            <p className='text-[20px] text-white text-center'>PROJECT 
CONSULTATION</p>

        </div>

    </div>


     {/* second card */}

     <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s2} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si2} alt="" />
    <p className='text-[20px] text-white text-center'>IP CONSULTATION</p>

</div>

</div>



 {/* third card */}

 <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s3} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si3} alt="" />
    <p className='text-[20px] text-white text-center'>STRATEGY 
DEVELOPMENT</p>

</div>

</div>


 {/* fourth card */}

 <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s4} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si4} alt="" />
    <p className='text-[20px] text-white text-center'>DESIGN 
RESEARCH</p>

</div>

</div>


 {/* fifth card */}

 <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s5} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si5} alt="" />
    <p className='text-[20px] text-white text-center'>INDUSTRIAL
DESIGN</p>

</div>

</div>


 {/* sizth card */}

 <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s6} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si6} alt="" />
    <p className='text-[20px] text-white text-center'>EXPERIENCE
DESIGN</p>

</div>

</div>



  {/* first card */}

  <div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s7} alt="" />
<div className='bg-primary p-8'>
    <img className='mx-auto ' src={si7} alt="" />
    <p className='text-[20px] text-white text-center'>3D DESIGN </p>

</div>

</div>


{/* second card */}

<div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s8} alt="" />
<div className='bg-primary p-8'>
<img className='mx-auto ' src={si8} alt="" />
<p className='text-[20px] text-white text-center'>PROTOTYPING</p>

</div>

</div>



{/* third card */}

<div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s9} alt="" />
<div className='bg-primary p-4'>
<img className='mx-auto ' src={si9} alt="" />
<p className='text-[20px] text-white text-center '>MULTI-DISCIPLINARY
ENGINEERING</p>

</div>

</div>


{/* fourth card */}

<div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s10} alt="" />
<div className='bg-primary p-8'>
<img className='mx-auto ' src={si10} alt="" />
<p className='text-[20px] text-white text-center'>TRANSFER TO 
MANUFACTURE</p>

</div>

</div>


{/* fifth card */}

<div className='w-[350px] h-[450px]'>

<img className='w-[350px] h-[250px] object-cover' src={s11} alt="" />
<div className='bg-primary p-8'>
<img className='mx-auto ' src={si11} alt="" />
<p className='text-[20px] text-white text-center'>MANUFACTURING</p>

</div>

</div>


{/* sizth card */}

<div className='w-[350px] h-[450px] '>

<img className='w-[350px] h-[250px] object-cover' src={s12} alt="" />
<div className='bg-primary p-8'>
<img className='mx-auto ' src={si12} alt="" />
<p className='text-[20px] text-white text-center'>PROJECT 
MANAGEMENT</p>

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