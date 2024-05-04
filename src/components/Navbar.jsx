import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import calender from '../assets/calendar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4">
      <div className="px-20 mx-auto  flex justify-between items-center">
        {/* Left Section */}
        <div className="flex-shrink-0">
       <Link to={'/'}>  <img className='object-cover w-[250px]' src={logo} alt="Logo" /> </Link> 
        </div>

        {/* Middle Section */}
        <div className="hidden md:flex space-x-6">
          <Link to={'/why-us'} className="text-[#666666] text-sm font-proxima">WHY US</Link>
          <Link to={'/'} className="text-[#666666] text-sm font-proxima">SERVICES</Link>
          <Link to={'/'} className="text-[#666666] text-sm font-proxima">WORK</Link>
          <Link to={'/'} className="text-[#666666] text-sm font-proxima">ABOUT</Link>
          <Link to={'/'} className="text-[#666666] text-sm font-proxima">BLOG</Link>
          <Link to={'/'} className="text-[#666666] text-sm font-proxima">CONTACT US</Link>
        </div>

        {/* Third Section */}
        <div className="hidden md:flex space-x-2">
          <button className="bg-primary font-bold leading-[20px] text-white font-proxima text-sm px-4 py-2 rounded-xl text-left flex gap-2 items-center">
            <img className='object-contain' src={calender} alt="" />
            BOOK <br />  CONSULTATION</button>
          <p className="px-4 py-2 rounded-md text-main text-sm font-bold font-proxima">CALL US <br /> <span className='text-secondary'> (+91) 88595 05051 </span></p>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col  items-center mt-4 bg-primary p-4">
              <Link to={'/'} className="text-white mb-2 " onClick={toggleMenu}>WHY US</Link>
              <Link to={'/'} className="text-white mb-2" onClick={toggleMenu}>SERVICES</Link>
              <Link to={'/'} className="text-white mb-2" onClick={toggleMenu}>WORK</Link>
              <Link to={'/'} className="text-white mb-2" onClick={toggleMenu}>ABOUT</Link>
              <Link to={'/'} className="text-white mb-2" onClick={toggleMenu}>BLOG</Link>
              <Link to={'/'} className="text-white mb-2" onClick={toggleMenu}>CONTACT US</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
