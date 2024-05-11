import React from 'react'
import calender from '../assets/calendar.png'
import services1 from '../assets/service1.png'
import services2 from '../assets/service2.png'
import services3 from '../assets/service3.png'

import Contact from '../components/Contact'

import { LuClock5 } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import { IoLocationOutline } from "react-icons/io5";

import link from '../assets/link.png'
import insta from '../assets/insta.png'
import fb from '../assets/fb.png'
import icon from '../assets/icon.png'

import { PiPaperPlaneRightLight } from "react-icons/pi";



const ContactPage = () => {

  return (
   <section>

      {/* header section */}

<header className='bg-header py-36 xl:py-0 xl:pt-60 xl:h-screen'>

<div className='max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto container '>
   <h2 className='text-primary text-4xl xl:text-[65px] mb-2 font-bold xl:leading-[60px]'>Your Growth Journey  </h2>
   <h2  className='text-primary text-4xl xl:text-[65px] font-bold xl:leading-[60px]'>Starts Here!</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* contact */}

   <section className='max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl container mx-auto  '>



 <h3 className='text-6xl xl:text-[150px] text-gray-200 font-bold mt-10'>CONTACT US</h3>

 <p className='text-primary   font-bold mb-2 text-xl xl:text-[25px]'>Partner with us and unlock the potential of your next project.</p>
 <p className='text-secondary text-base xl:text-[20px] font-bold'>Join us on this journey of creativity, where every project tells a story of collaboration, passion, and relentless pursuit of excellence.</p>




   {/* contact details */}


    <div className='mt-8 flex flex-col space-y-12 xl:space-y-0 xl:flex-row  items-start justify-between'>


       {/* left side */}
       <div>

        <div className='flex items-start gap-2'>

        <CiMail size={30} color='0F3177'/>
          <div>
            <p className='text-[32px] text-primary leading-6 font-bold'>Email</p>
            <p className='text-[22px] text-secondary mt-2'>arvind@innocreatedesigns.com</p>
          </div>

        </div>

        <div className='flex gap-2 mt-8'>

        <IoCallOutline size={30} color='0F3177' />
<div>
  <p className='text-[32px] text-primary leading-6 font-bold'>Call us</p>
  <p className='text-[22px] text-secondary mt-2'>(+91) 88595 05051</p>
</div>

</div>  


<div className='flex gap-2 mt-8'>

<LuClock5 size={30} color='0F3177' />
<div>
  <p className='text-[32px] text-primary leading-6 font-bold'>Work Timings</p>
  <p className='text-[22px] text-secondary mt-2'>Monday - Saturday</p>
  <p className='text-[22px] text-secondary'>9:30 AM to 6:30 PM</p>
</div>

</div>

       </div>



         {/* right side */}
         <div>

        <div className='flex gap-2'>

        <IoLocationOutline size={30} color='0F3177' />
          <div>
            <div>
            <p className='text-[32px] text-primary leading-6 font-bold'>India Office</p>
            <p className='text-[22px] text-secondary mt-2'>Dehradun, Uttarakhand - India</p>
            </div>
     
            <div>
            <p className='text-[32px] text-primary leading-6 mt-8 font-bold'>USA Office</p>
            <p className='text-[22px] text-secondary mt-2'>Saratoga, CA USA</p>
            </div>
          </div>

        </div>

        <div className='flex gap-2 mt-8'>

        <PiPaperPlaneRightLight size={30} color='0F3177'  />
<div>
  <p className='text-[32px] text-primary leading-6 font-bold'>Follow Us</p>
 <div className='flex gap-4 mt-4'>
  <img src={link} alt="" />
  <img src={fb} alt="" />
  <img src={insta} alt="" />
  <img src={icon} alt="" />

 </div>
</div>

</div>  



       </div>

    </div>




   <div className='mt-28 boredr-t border border-secondary'></div>




       



  </section>




     {/* lets connect */}

     <Contact />








   </section>
  )
}

export default ContactPage