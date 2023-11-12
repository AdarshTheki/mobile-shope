import React from 'react';
import Cart from './Cart';
import useProductContext from '../../context/useProductContext';

export default function CartItem() {
  const { cartItems } = useProductContext();
  console.log(cartItems)
  return (
    <div className='grid sm:grid-cols-3 gap-2 my-5'>
      {cartItems?.map((item) => (
        <Cart key={item?.id} {...item} />
      ))}
    </div>
  );
}
