import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" /> 

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col itmes-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col itmes-center gap-1 '>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col itmes-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col itmes-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center' />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
