import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='bg-gray-900 flex h-12 items-center px-20 justify-between'>
      <p className='text-gray-400'>© {date} Adarsh Verma. All rights reserved.</p>
      <div className=' list-none flex space-x-10'>
        <a href='#'>
          <FaFacebook color='gray' size={25} />
        </a>
        <a href='#'>
          <FaInstagram color='gray' size={25} />
        </a>
        <a href='#'>
          <FaTwitter color='gray' size={25} />
        </a>
        <a href='#'>
          <FaGithub color='gray' size={25} />
        </a>
        <a href='#'>
          <FaYoutube color='gray' size={25} />
        </a>
      </div>
    </div>
  );
}
