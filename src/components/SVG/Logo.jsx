import React from 'react';

export default function Logo() {
  return (
    <a
      href='https://github.com/AdarshTheki'
      target='__blank'
      className='flex items-center space-x-2 rtl:space-x-reverse'>
      <img src='https://flowbite.com/docs/images/logo.svg' className='h-6' alt='Logo' />
      <span className='self-center font-semibold whitespace-nowrap dark:text-white'>
        mobile shop
      </span>
    </a>
  );
}
