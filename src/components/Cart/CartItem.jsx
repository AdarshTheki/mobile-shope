import React from 'react';
import Cart from './Cart';
import MissingCartItems from './MissingCartItems';
import { useCart } from '../../context/Cart_Context';

export default function CartItem() {
  const { cart, total_items } = useCart();

  if (total_items === 0) {
    return <MissingCartItems />;
  }

  return (
    <table className='w-full table-auto'>
      <thead className='text-gray-500 capitalize text-sm font-medium'>
        <th>name</th>
        <th>price</th>
        <th>count</th>
        <th>totals</th>
      </thead>
      <tbody>{cart && cart?.map((item) => <Cart key={item?.id} {...item} />)}</tbody>
    </table>
  );
}
