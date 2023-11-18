import React from 'react';
import GlobalContext from '../../context/GlobalContext';
import { Inputs, Navigation } from '../../utils/index';

export default function CheckoutCart() {
  const { cartItems } = GlobalContext();
  const counts = cartItems.reduce((total, curr) => total + curr.count * curr.current_price, 0);

  let Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  const totals = Rupees.format(counts);

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
        <Navigation to='/order-payment' className='bg-blue-600 text-center'>
          Proceed to Checkout →
        </Navigation>
      )}
    </div>
  );
}
