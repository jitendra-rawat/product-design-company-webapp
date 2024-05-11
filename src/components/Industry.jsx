import React from 'react'
import focus1 from '../assets/focus1.png'
import focus2 from '../assets/focus2.png'
import focus3 from '../assets/focus3.png'

const Industry = () => {
  return (
   <section className='py-20 max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl container mx-auto  '>

 <div className='flex space-x-16 justify-between items-start '>


  {/* left section */}
  
    <div>
        <h3 className='text-primary text-[45px] space-x-4 leading-[55px]  font-bold'>Industry <br /> Experience</h3>
    </div>

    {/* right section */}

    <div className='flex flex-wrap space-x-1 space-y-2 justify-between items-center'>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Medical Services</p>

        </div>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>IVD Instruments</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Consumer Electronics</p>

        </div>



        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Life Science</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>IoT</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>MIIoT</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Smart Wearables</p>

        </div>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Appliances</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Agri-Tech</p>

        </div>



        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Fitness & Wellness</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Manufacturing</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary text-base'>Automation</p>

        </div>





    </div>

    </div>



      {/* heading */}

  <h3 className='text-[150px] text-gray-200 font-bold mt-10'>OUR FOCUS</h3>

  <p className='text-primary   font-bold mb-2 text-[25px]'>Product development that is User centric.</p>
  <p className='text-secondary text-[20px] font-bold'>We excel in lean design thinking - a strong differentiator from our competitors; We strive to become a driven, accountable partner committed to your end goal. Our engagement model offers true reliability and a radically better customer experience.</p>



   {/* icon cards */}

 <div className='mt-24  flex justify-between items-center'>

     {/* first card */}

     <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>INNOVATIVE <br />
APPROACH</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Our innovative product development balances desirability, feasibility, and viability, resulting in products that not only meets user needs but also aligns with business goals and vision.</p>
     </div>

         {/* second card */}

         <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>DESIGN  <br />
EXCELLENCE </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >At the heart of every successful product lies impeccable design. Experience the transformative power of design excellence with us, where every product demonstrates functionality and  tells a compelling story of creativity, precision, and unparalleled craftsmanship.</p>
     </div>


          {/* third card */}

     <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>COLLABORATIVE <br />
GROWTH </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >From concept refinement to market expansion, we work hand in hand with our clients to overcome challenges, seize opportunities, and achieve sustainable growth.</p>
     </div>



 </div>


   </section>
  )
}

export default Industry