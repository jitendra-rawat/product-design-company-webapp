import React from 'react'
import logo from '../assets/logo.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import link from '../assets/link.png'
import icon from '../assets/icon.png'
import msme from '../assets/msme.png'
import start from '../assets/start.png'
import make from '../assets/make.png'
import call from '../assets/call.png'
import mail from '../assets/mail.png'

const Footer = () => {
  return (
   <footer className='bg-header py-24'>

    <div className='max-w-6xl mx-auto container flex  justify-between items-start'>

        {/* first section */}
        <div className=' w-1/3'>

            <img src={logo} alt="" />
            <p className='text-primary font-bold text-xl text-center'>Guiding Force -  InnoCreate Global - USA</p>
            <p className='text-secondary font-bold text-xl text-center mb-2'>www.innocreateglobal.com</p>

            <div className='border-b border-secondary mb-8'></div>
            <p className='text-xl text-justify text-secondary font-bold'>With our extensive industry expertise, we craft innovative product solutions, ensuring client success. A focus on customer satisfaction and an aim to exceed expectations, we deliver exceptional value in every project.
</p>

<p className='text-lg text-secondary mt-4 font-bold'>GET YOUR FREE NO-OBLIGATION CONSULTATION!</p>

<button className='bg-primary py-3 px-6 rounded-lg mt-2 text-white'>BOOK CONSULTATION</button>

        </div>


              {/* second section */}
              <div className=''> 

                <h4 className='text-2xl text-primary font-bold mb-8'>Links</h4>

                <ul>
                    <li className='text-lg my-5 font-bold text-secondary'>WHY US</li>
                    <li className='text-lg my-5 font-bold text-secondary'>SERVICES</li>
                    <li className='text-lg my-5 font-bold text-secondary'>WORK</li>
                    <li className='text-lg my-5 font-bold text-secondary'>ABOUT</li>
                    <li className='text-lg my-5 font-bold text-secondary'>BLOG</li>
                </ul>

                <h4 className='text-lg  font-bold text-secondary mt-20'>Promoting:</h4>
                <img src={make} alt="" />
            
            </div>




                  {/* third section */}
        <div className=''>

        <h4 className='text-2xl text-primary font-bold mb-8'>Contact</h4>


        <div className='flex items-center gap-2'>
            <img src={mail} alt="" />
            <p className='text-lg  font-bold text-secondary mb-2'>arwind@innocreatedesign.com</p>
        </div>


        <div className='flex items-center gap-2'>
            <img src={call} alt="" />
            <p className='text-lg  font-bold text-secondary'> (+91) 88595 05051</p>
        </div>

 <div>
 <h4 className='text-2xl text-primary font-bold mt-8'>India Office</h4>

<p className='text-lg  font-bold text-secondary'>Dehradun, Uttarakhand, India</p>
 </div>


 <div>
 <h4 className='text-2xl text-primary font-bold  mt-8'>USA Office</h4>

<p className='text-lg  font-bold text-secondary'>Saratoga, CA USA</p>
 </div>


  <div className='mt-10'>
    <p className=' text-lg font-bold text-secondary'>Registered With:</p>

    <div className='mt-2 flex  justify-between'>
        <img src={msme} alt="" />
        <img src={start} alt="" />
    </div>
  </div>
    
            
            </div>




    </div>

    <div className="max-w-6xl mx-auto container border-b border-gray-400 mt-14"></div>

    <div className='max-w-6xl mx-auto container flex justify-between items-center mt-2'>

        

        <p>© 2024 InnoCreate Designs LLP. All Rights Reserved.</p>

        <div className='flex items-center gap-2'>
            <img src={link} alt="" />
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={icon} alt="" />

        </div>

    </div>

   </footer>
  )
}

export default Footer