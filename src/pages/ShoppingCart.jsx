import React from 'react';
import Empty from '../components/cart/EmptyCartMessage';
import CartItem from '../components/cart/CartItem';
import CheckoutCart from '../components/cart/CheckoutCart';

export default function ShoppingCart() {
  return (
    <div>
      <h1 className='text-3xl text-center my-3 font-bold text-gray-700'>Shopping Cart</h1>
      <hr />
      <div className='max-w-[1000px] mx-auto px-10 my-3 '>
        <Empty />
      </div>
      <hr />
      <div className='sm:flex gap-5 max-w-[1000px] my-3 mx-auto items-start justify-between px-10'>
        <CartItem />
        <CheckoutCart />
      </div>
    </div>
  );
}
