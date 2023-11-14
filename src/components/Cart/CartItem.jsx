import React from 'react';
import Cart from './Cart';
import useProductContext from '../../context/useProductContext';

export default function CartItem() {
  const { cartItems } = useProductContext();
  
  if (cartItems.length === 0) {
    return (
      <div className="text-center text-3xl capitalize font-medium text-gray-700 my-10">
        Your Cart is empty
      </div>
    )
  }

  return (
    <div className='grid lg:grid-cols-2 gap-5 w-full'>
      {cartItems?.map((item) => (
        <Cart key={item?.id} {...item} />
      ))}
    </div>
  );
}
