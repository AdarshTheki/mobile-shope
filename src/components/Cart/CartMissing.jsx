import React from 'react';
import carts from '../../assets/carts.webp';
// import carts from '../assets/carts.webp';
import Button from '../../utils/Button';

export default function CartMissing() {
  return (
    <div className='w-96 flex flex-col items-center gap-2 mx-auto'>
      <img src={carts} alt='carts' />
      <h1 className='text-xl'>Missing Cart items?</h1>
      <p>Login to see the items you added previously</p>
      <div className='w-1/2'>
        <Button className='bg-orange-600 hover:bg-orange-700 text-white'>login</Button>
      </div>
    </div>
  );
}
