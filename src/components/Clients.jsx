import React from 'react'
import image1 from '../assets/client1.png'
import image2 from '../assets/client2.png'
import image3 from '../assets/client3.png'
import image4 from '../assets/client4.png'
import image5 from '../assets/client5.png'


const Clients = () => {
  return (
    <section className='py-20 px-10 container mx-auto  '>

<h3 className='text-4xl text-primary font-bold'>Our Clients</h3>


<div className='flex flex-wrap justify-between items-center mt-4 px-20'>

    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />
    <img src={image5} alt="" />

</div>


  {/* slogan */}

    <div className='max-w-4xl mx-auto container mt-28'>
        <p className='text-primary font-bold text-lg text-center'>We strive for excellence in the entire product design & development process. While this may sound cliché, there’s a deeper meaning to it. For us, “Design for excellence is not just a tagline, it's our work culture.”</p>
    </div>

        </section>
  )
}

export default Clients