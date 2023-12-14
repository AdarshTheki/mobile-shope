import React from 'react';
import TotalCartItem from '../components/cart/TotalCartItem';
import CartItem from '../components/cart/CartItem';
import CheckoutCart from '../components/cart/CheckoutCart';

export default function ShoppingCart() {
  return (
    <div className='max-w-xl space-y-4 px-4 mx-auto my-8'>
      <TotalCartItem />
      <hr />
      <CartItem />
      <CheckoutCart />
    </div>
  );
}
