import React from 'react';
import { NavLink } from 'react-router-dom';
import iphone from '../../assets/iph.png';

export default function Banner() {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #c541ff, #ab54fe, #9160fa, #7968f3, #646eea, #467eee, #298cee, #1a98ea, #2cb1ed, #5bc8ec, #8bddec, #baf0f0)',
      }}
      className='md:flex px-10 items-center'>
      <div className='flex-grow'>
        <img src={iphone} className='object-contain' />
      </div>
      <div className='grid flex-grow min-w-screen-xl px-4 py-12 mx-auto gap-6 lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12'>
        <div className='lg:col-span-12 flex flex-col justify-center items-center text-center'>
          <h1 className='max-w-3xl mb-3 text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl text-gray-200'>
            Discover the Latest Mobile Trends
          </h1>
          <p className='max-w-2xl mb-4 font-light text-lg lg:mb-6 md:text-base lg:text-lg text-gray-100'>
            Explore our collection of stylish Mobiles and accessories to stay in vogue.
          </p>
          <div className='flex space-x-3'>
            <NavLink
              to='/products'
              className='inline-flex duration-300 items-center justify-center px-4 py-2 text-base font-medium text-white rounded-lg bg-blue-600 border border-blue-600 hover:scale-90'>
              Shop Now
              <svg
                className='w-4 h-4 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </NavLink>
            <NavLink
              to='/contact'
              className='inline-flex duration-500 items-center justify-center px-4 py-2 text-base font-medium border border-gray-100 rounded-lg text-white hover:scale-90'>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
