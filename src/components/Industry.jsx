import React from 'react'
import focus1 from '../assets/focus1.png'
import focus2 from '../assets/focus2.png'
import focus3 from '../assets/focus3.png'

const Industry = () => {
  return (
   <section className='py-20 max-w-5xl container mx-auto  '>

 <div className='flex space-x-5 justify-between items-center '>


  {/* left section */}
  
    <div>
        <h3 className='text-primary text-4xl  '>Industry <br /> Experience</h3>
    </div>

    {/* right section */}

    <div className='flex flex-wrap gap-2 justify-between items-center'>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Medical Services</p>

        </div>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>IVD Instruments</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Consumer Electronics</p>

        </div>



        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Life Science</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>IoT</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>MIIoT</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Smart Wearables</p>

        </div>

        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Appliances</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Agri-Tech</p>

        </div>



        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Fitness & Wellness</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Manufacturing</p>

        </div>


        <div className='border-2 rounded-full  border-secondary py-2 px-4'>
            <p className='text-secondary'>Automation</p>

        </div>





    </div>

    </div>



      {/* heading */}

  <h3 className='text-[150px] text-gray-200 font-bold mt-10'>OUR FOCUS</h3>

  <p className='text-primary  text-xl font-bold mb-2 text-[25px]'>Product development that is User centric.</p>
  <p className='text-secondary text-xl font-bold'>We excel in lean design thinking - a strong differentiator from our competitors; We strive to become a driven, accountable partner committed to your end goal. Our engagement model offers true reliability and a radically better customer experience.</p>



   {/* icon cards */}

 <div className='mt-12  flex justify-between items-center'>

     {/* first card */}

     <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus1} alt="" />
<h5 className='text-2xl font-bold text-primary mt-4'>INNOVATIVE <br />
APPROACH</h5>
<p className=' text-primary text-xl font-bold mt-2' >Our innovative product development balances desirability, feasibility, and viability, resulting in products that not only meets user needs but also aligns with business goals and vision.</p>
     </div>

         {/* second card */}

         <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus2} alt="" />
<h5 className='text-2xl font-bold text-primary mt-4'>DESIGN  <br />
EXCELLENCE </h5>
<p className=' text-primary text-xl font-bold mt-2' >At the heart of every successful product lies impeccable design. Experience the transformative power of design excellence with us, where every product demonstrates functionality and  tells a compelling story of creativity, precision, and unparalleled craftsmanship.</p>
     </div>


          {/* third card */}

     <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={focus3} alt="" />
<h5 className='text-2xl font-bold text-primary mt-4'>COLLABORATIVE <br />
GROWTH </h5>
<p className=' text-primary text-xl font-bold mt-2' >From concept refinement to market expansion, we work hand in hand with our clients to overcome challenges, seize opportunities, and achieve sustainable growth.</p>
     </div>



 </div>


   </section>
  )
}

export default Industry