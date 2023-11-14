import React from 'react';
import { useNavigate } from 'react-router-dom';

import useProductContext from '../../context/useProductContext';
import Inputs from '../../utils/Inputs';
import Button from '../../utils/Button';

export default function CheckoutCart() {
  const { cartItems } = useProductContext();
  const counts = cartItems.reduce((total, curr) => total + curr.count * curr.current_price, 0);

  let Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  const totals = Rupees.format(counts);

  const navigated = useNavigate();

  return (
    <div className='grid min-w-[250px]'>
      <h1 className='font-medium text-xl mb-3'>Order summary</h1>
      <div className='flex justify-between'>
        <p>Subtotal</p>
        <p>{totals}</p>
      </div>
      <div className='border-y py-5'>
        <Inputs label='Have a coupon code?' placeholder='Enter coupon code' />
        <p className='text-sm my-2 text-green-500 bg-green-200 p-1 rounded'>
          Coupon: BUYNOW - 10% off
        </p>
        <button className=' uppercase px-2 py-1 text-white bg-green-600 font-medium text-sm rounded hover:opacity-90'>
          Apply code
        </button>
      </div>
      <div className='flex justify-between mb-5'>
        <h3>Order Total</h3>
        <h1 className='font-semibold text-2xl text-red-600'>{totals}</h1>
      </div>
      {cartItems.length !== 0 && (
        <Button onClick={() => navigated('/order-payment')} className='bg-blue-600'>
          Proceed to Checkout →
        </Button>
      )}
    </div>
  );
}
