import React from 'react';
import Cart from './Cart';
import MissingCartItems from './MissingCartItems';
import GlobalContext from '../../context/GlobalContext';

export default function CartItem() {
  const { cartItems } = GlobalContext();

  if (cartItems.length === 0) {
    return <MissingCartItems />;
  }

  return (
    <div className='grid lg:grid-cols-2 gap-5 w-full'>
      {cartItems?.map((item) => (
        <Cart key={item?.id} {...item} />
      ))}
    </div>
  );
}
