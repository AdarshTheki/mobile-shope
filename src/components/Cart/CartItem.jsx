import React from 'react';
import Cart from './Cart';
import MissingCartItems from './MissingCartItems';
import useCartContext from '../../context/useCartContext';

export default function CartItem() {
  const { cart, total_items } = useCartContext();

  if (total_items === 0) {
    return <MissingCartItems />;
  }

  return (
    <div className='w-full'>
      {cart?.map((item) => (
        <Cart key={item?.id} {...item} />
      ))}
    </div>
  );
}
