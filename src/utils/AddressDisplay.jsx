import React from 'react';
import { useCart } from '../context/Cart_Context';

export default function AddressDisplay() {
  const { address } = useCart();

  return (
    <div className='capitalize'>
      <h2 className='font-medium mb-2 text-center underline'>Shipping Address</h2>
      <h2 className='font-medium'>{address?.name}</h2>
      <p className='text-sm text-gray-700'>{address?.address}</p>
      <h5 className='mt-2 font-medium'>{`${address?.city}, ${address?.country} - ${address?.postal_code}`}</h5>
      <p>Phone: +91 {address?.phone}</p>
    </div>
  );
}
