import React from 'react';
import Empty from '../components/Cart/EmptyCartMessage';
import CartItem from '../components/Cart/CartItem';
import CartsTotals from '../components/Cart/CartsTotals';

export default function CartPage() {
  return (
    <div className='max-w-[800px] mx-auto'>
      <Empty />
      <CartItem />
      <CartsTotals />
    </div>
  );
}
