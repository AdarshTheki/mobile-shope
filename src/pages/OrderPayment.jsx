import React from 'react';
import ShippingAddress from '../components/order-payment/ShippingAddress';
import OrderSummary from '../components/order-payment/OrderSummary';

export default function OrderPayment() {
  return (
    <div className='grid gap-5 sm:grid-cols-2 p-10'>
      <ShippingAddress />
      <OrderSummary />
    </div>
  );
}
