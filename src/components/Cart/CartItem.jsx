import React from 'react';
import Cart from './Cart';
import MissingCartItems from './MissingCartItems';
import { useCart } from '../../context';

export default function CartItem() {
  const { cart, total_items } = useCart();

  if (total_items === 0) {
    return <MissingCartItems />;
  }

  return (
    <div className='mx-auto max-w-2xl sm:grid grid-cols-2 gap-4'>
      {cart && cart?.map((item) => <Cart key={item?.id} {...item} />)}
    </div>
  );
}
