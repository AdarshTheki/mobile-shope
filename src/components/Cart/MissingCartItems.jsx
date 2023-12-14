import React from 'react';
import carts from '../../assets/carts.webp';
import { NavLink } from 'react-router-dom';

export default function CartMissing() {
  return (
    <div className='text-center space-y-4 mx-auto'>
      <img src={carts} alt='carts' className='w-96 object-contain' />
      <h1 className='text-xl'>Missing Cart items?</h1>
      <div>
        <NavLink
          to='/products'
          className='bg-blue-600 text-white px-4 py-2 hover:opacity-80 rounded capitalize'>
          got to products
        </NavLink>
      </div>
    </div>
  );
}
