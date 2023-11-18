import React from 'react';
import { NavLink } from 'react-router-dom';
import ShippingAddress from '../components/checkout/OrderSummary';
import OrderSummary from '../components/checkout/ShippingAddress';

export default function OrderPayment() {
  return (
    <div className='grid gap-5 sm:grid-cols-2 p-10'>
      <ShippingAddress />
      <OrderSummary />
    </div>
  );
}
