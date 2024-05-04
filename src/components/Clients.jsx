import React from 'react'
import image1 from '../assets/client1.png'
import image2 from '../assets/client2.png'
import image3 from '../assets/client3.png'
import image4 from '../assets/client4.png'
import image5 from '../assets/client5.png'


const Clients = () => {
  return (
    <section className='py-20 px-10 container mx-auto  '>

<h3 className='text-[45px] text-primary leading-snug font-bold'>Our Clients</h3>


<div className='flex flex-wrap justify-between items-center mt-8 px-4'>

    <img className='object-cover' src={image1} alt="" />
    <img className='object-cover' src={image2} alt="" />
    <img className='object-cover' src={image3} alt="" />
    <img className='object-cover' src={image4} alt="" />
    <img className='object-cover' src={image5} alt="" />

</div>


  {/* slogan */}

    <div className='max-w-4xl mx-auto container mt-28'>
        <p className='text-primary text-[32px] leading-tight  text-lg text-center'>We strive for excellence in the entire product design & development process. While this may sound cliché, there’s a deeper meaning to it. For us,<span className='text-secondary'> “Design for excellence is not just a tagline, it's our work culture.”</span> </p>
    </div>

        </section>
  )
}

export default Clients