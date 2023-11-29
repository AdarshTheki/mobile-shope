import React from 'react';
import Logo from '../SVG/Logo';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className='bg-gray-900 text-white dark:bg-gray-900 shadow-2xl'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <Logo />
            <ul className='flex capitalize flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Licensing
                </a>
              </li>
              <li>
                <a className='hover:underline me-4 md:me-6' href='/order/success/'>
                  success
                </a>
              </li>
              <li>
                <a className='hover:underline me-4 md:me-6' href='/order/track/'>
                  track
                </a>
              </li>
              <li>
                <a className='hover:underline me-4 md:me-6' href='/order-payment'>
                  order payment
                </a>
              </li>
              <li>
                <a className='hover:underline me-4 md:me-6' href='/shopping-cart'>
                  shopping cart
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-200 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a href='https://github.com/AdarshTheki' className='hover:underline'>
              Adarsh Verma™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
