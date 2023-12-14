import React from 'react';
import { NavLink } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className='flex my-10 flex-col items-center justify-center text-center gap-5'>
      <h1 className=' text-3xl'>✅</h1>
      <h1 className=' text-xl font-medium'>Order Successfully Complete!</h1>
      <p className='text-gray-600'>
        Thank you for completing your order. We have sent you an email with the details of your
        order.
      </p>
      <p>Have a great day!</p>
      <NavLink
        to='/'
        className=' bg-blue-600 text-white px-20 py-2 rounded-3xl hover:opacity-80 duration-300'>
        Home
      </NavLink>
    </div>
  );
}
