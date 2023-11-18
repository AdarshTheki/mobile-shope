import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='bg-gray-900 sm:flex py-3 items-center px-20 justify-between'>
      <p className='text-gray-400 sm:text-base text-xs'>© {date} Adarsh Verma. All rights reserved.</p>
      <div className='list-none flex space-x-2 md:space-x-10 sm:space-x-4'>
        <a href='#'>
          <FaFacebook className='md:text-2xl text-xl text-gray-400' />
        </a>
        <a href='#'>
          <FaInstagram className='md:text-2xl text-xl text-gray-400' />
        </a>
        <a href='#'>
          <FaTwitter className='md:text-2xl text-xl text-gray-400' />
        </a>
        <a href='#'>
          <FaGithub className='md:text-2xl text-xl text-gray-400' />
        </a>
        <a href='#'>
          <FaYoutube className='md:text-2xl text-xl text-gray-400' />
        </a>
      </div>
    </div>
  );
}
