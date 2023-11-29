import React from 'react';
import ShippingAddress from '../components/order/ShippingAddress';
import useCartContext from '../context/useCartContext';
import Cart from '../components/cart/Cart';

export default function OrderPayment() {
  const { cart } = useCartContext();
  return (
    <div className='grid gap-5 sm:grid-cols-2 p-10'>
      <div>
        <h2>Order summery</h2>
        {cart && cart.map((item) => <Cart key={item?.id} {...item} />)}
      </div>
      <ShippingAddress />
    </div>
  );
}
