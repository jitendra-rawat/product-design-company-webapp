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

import work5 from '../assets/work1.png'
import work6 from '../assets/work2.png'
import work7 from '../assets/work3.png'
import OurWork from '../components/OurWork'





const About = () => {

  return (
   <section>

      {/* header section */}

      <header className='bg-header pt-60 h-screen'>   

<div className='max-w-6xl mx-auto container '>
   <h2 className='text-primary text-[65px] mb-2 font-bold leading-[60px]'>WHERE IDEAS </h2>
   <h2  className='text-primary text-[65px] font-bold leading-[60px]'>MEET EXCELLENCE</h2>


   <button className="mt-16 bg-primary font-bold leading-[20px] text-white font-proxima text-base px-8 py-4 rounded-lg text-left flex  gap-2 items-center">
           <img className='object-contain' src={calender} alt="" />
           BOOK   CONSULTATION</button>



      
</div>

  </header>


   {/* about */}

   <section className=' max-w-6xl container mx-auto py-16 '>



 <h3 className='text-[150px] text-gray-200 font-bold '>ABOUT</h3>

 <p className='text-primary   font-bold mb-2 text-[25px]'>Crafting Innovation with Passion</p>
 <p className='text-secondary text-[20px] font-bold'>We don’t just create products; we infuse them with soul, creativity, and a commitment to pushing the boundaries of what's possible in design & development process.</p>



  {/* icon cards */}

<div className='mt-20 py-10  flex justify-between items-center '>

    {/* first card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={about1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Global Reach, Local Presence

</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >While our roots may be local, our reach is global. Whether you're a small startup or a multinational corporation, you can count on us to provide personalized service and world-class design solutions that transcend borders and drive success on a global scale.</p>
    </div>

        {/* second card */}

        <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={about2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Efficient Development </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >We streamline the product development process, saving our clients time, resources, and effort. From initial ideation to final production, we employ efficient workflows and utilize advanced technologies to accelerate project timelines without compromising quality. </p>
    </div>


         {/* third card */}

    <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={about3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Multidisciplinary Expertise
 </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >We bring together a diverse team of multidisciplinary experts with backgrounds in industrial design, engineering, and manufacturing. This convergence of talents allows us to approach projects from various angles, blending creativity with technical expertise to deliver holistic solutions that are both innovative and practical.</p>
    </div>



</div>


   <div className='mt-40 boredr-t border border-secondary'></div>




       



  </section>




       {/* vision */}

   <section className='py-10 max-w-6xl container mx-auto  '>



<h3 className='text-[150px] text-gray-200 font-bold '>VISION</h3>

<p className='text-primary   font-bold mb-2 text-[25px]'>Innovation Through Tech</p>
<p className='text-secondary text-[20px] font-bold'>Solving product or market needs through use of technology during product development process.
</p>



 {/* icon cards */}

<div className=' py-24  flex flex-wrap justify-between items-center gap-y-36 '>

   {/* first card */}

   <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={vision1} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Supporting Startups and Entrepreneurs



</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >By nurturing the startup ecosystem, we are committed to supporting startups and entrepreneurs on their journey to success. we provide the resources and support needed to turn innovative ideas into viable businesses.</p>
   </div>

       {/* second card */}

       <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={vision2} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Driving Innovation Growth </h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Through our cutting-edge design solutions, strategic partnerships, and thought leadership initiatives, we aim to catalyze innovation, foster entrepreneurship, and propel onto the global stage as a leader in industrial design and innovation. </p>
   </div>


        {/* third card */}

   <div className='w-[300px] h-[400px]'>
<img className='w-[80px] h-[80px]' src={vision3} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Empowerment Through Design
</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Through our cutting-edge design solutions, strategic partnerships, and thought leadership initiatives, we aim to catalyze innovation, foster entrepreneurship, and propel onto the global stage as a leader in industrial design and innovation.</p>
   </div>


   
        {/* fourth card */}

        <div className='w-[300px] h-[400px] '>
<img className='w-[80px] h-[80px]' src={vision4} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Design-Led Sustainability
</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >We are committed to integrating sustainability principles into our design processes, from material selection and manufacturing techniques to end-of-life considerations.</p>
   </div>   


        {/* fifth card */}

        <div className='w-[300px] h-[400px] '>
<img className='w-[80px] h-[80px]' src={vision5} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Collaboration and Partnership

</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >From project kickoff to final delivery, we work hand in hand with our clients to understand their goals, align on objectives, and co-create solutions that exceed expectations. we leverage the collective expertise and insights of our team and partners to bring our clients' visions to life.
</p>
   </div>   



        {/* sixth card */}

        <div className='w-[300px] h-[400px] '>
<img className='w-[80px] h-[80px]' src={vision6} alt="" />
<h5 className='text-[32px] font-bold text-primary mt-4 leading-snug'>Attention to Detail and Craftsmanship

</h5>
<p className=' text-primary text-[20px] font-bold mt-2 leading-snug' >Our commitment to craftsmanship shines through in the quality of our workmanship, the precision of our engineering, and the refinement of our aesthetics. Excellence is in the details, and we leave no stone unturned in our pursuit of perfection.</p>
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

export default About