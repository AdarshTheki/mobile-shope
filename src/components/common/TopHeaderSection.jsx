import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

import { SocialIcons, Dropdown } from '../../utils';
import { useAuth } from '../../context';

export default function TopHeaderSection() {
  const { user } = useAuth();
  return (
    <div className='container text-white px-5 py-2 text-sm capitalize mx-auto'>
      <div className='flex gap-5 items-center justify-end'>
        <Dropdown label={''} lists={['Rupee ₹', 'Dollar $']} />
        <SocialIcons />
        <Link
          to='/order-track'
          className='flex text-xs items-center hover:text-blue-600 duration-300'>
          <IoLocationSharp className='text-xl' />
          <span>track Order</span>
        </Link>
        <Link to='/profile' className='flex text-xs items-center hover:text-blue-600 duration-300'>
          <FaUser fontSize={14} />
          <span className='ml-1'>dear, {user?.name || user?.email || 'user'}</span>
        </Link>
      </div>
    </div>
  );
}
