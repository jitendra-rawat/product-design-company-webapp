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

    <img className='object-cover w-[143px]' src={image1} alt="" />
    <img className='object-cover w-[280px]' src={image2} alt="" />
    <img className='object-cover w-[117px]' src={image3} alt="" />
    <img className='object-cover w-[226px]' src={image4} alt="" />
    <img className='object-cover w-[389px]' src={image5} alt="" />

</div>




   

        </section>
  )
}

export default Clients