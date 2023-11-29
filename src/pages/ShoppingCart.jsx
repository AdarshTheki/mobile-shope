import React from 'react';
import TotalCartItem from '../components/cart/TotalCartItem';
import CartItem from '../components/cart/CartItem';
import CheckoutCart from '../components/cart/CheckoutCart';

export default function ShoppingCart() {
  return (
    <div>
      <h1 className='text-3xl text-center my-3 font-bold text-gray-700'>Shopping Cart</h1>
      <hr />
      <div className='my-3 container sm:px-10 px-5 mx-auto'>
        <TotalCartItem />
      </div>
      <hr />
      <div className='my-3 container sm:px-10 px-5 mx-auto sm:flex gap-5 items-start'>
        <CartItem />
        <CheckoutCart />
      </div>
    </div>
  );
}
