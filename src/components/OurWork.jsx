import React from 'react'
import work5 from '../assets/work1.png'
import work6 from '../assets/work2.png'
import work7 from '../assets/work3.png'

const OurWork = () => {
  return (
    <section className='py-20 mx-8  bg-[#F9F9F9] '>


       <h3 className='text-primary text-[45px] font-bold   '>Our Work</h3>


    {/* cards */}

    <div className='mt-8 flex flex-wrap   space-x-4 items-center'>

<img className='rounded-xl w-[350px] h-[300px] object-cover' src={work5} alt="" />
<img className='rounded-xl w-[350px] h-[300px] object-cover' src={work6} alt="" />
<img className='rounded-xl w-[350px] h-[300px] object-cover' src={work7} alt="" />
<div className='rounded-xl w-[350px] h-[300px] bg-primary flex justify-center items-center'>
    <p className='text-[30px] text-white  font-bold'>View All</p>

</div>



        </div>

   

   </section>
  )
}

export default OurWork