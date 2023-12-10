import React from 'react';
import Dropdown from '../../utils/Dropdown';
import { Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoLocationSharp } from 'react-icons/io5';
import SocialIcons from '../../utils/SocialIcons';

export default function HeaderSection() {
  return (
    <div className='container sm:px-10 px-5 border-b pb-1 text-sm capitalize mx-auto'>
      <div className='flex gap-10 items-center justify-end'>
        <Dropdown label={''} lists={['Rupee ₹', 'Dollar $']} />
        <SocialIcons />
        <Link to={'/order-track'} className='flex text-xs items-center hover:text-blue-600 duration-300'>
          <IoLocationSharp className='text-xl' />
          <span>track Order</span>
        </Link>
        <Link to={'/products'} className='flex text-xs items-center hover:text-blue-600 duration-300'>
          <RiShoppingBag3Line className='text-xl' />
          <span>Shope</span>
        </Link>
      </div>
    </div>
  );
}
