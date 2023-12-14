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
    <div className='mx-auto max-w-2xl'>
      {cart && cart?.map((item) => <Cart key={item?.id} {...item} />)}
    </div>
  );
}
