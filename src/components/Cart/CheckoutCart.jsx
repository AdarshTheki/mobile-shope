import React from 'react';
import useCartContext from '../../context/useCartContext';
import { formatePrice } from '../../utils/helpers';
import { Inputs } from '../../utils/index';
import { NavLink } from 'react-router-dom';

export default function CheckoutCart() {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <div className='grid min-w-[250px]'>
      <h1 className='font-medium text-xl mb-3'>Order summary</h1>
      <div className='flex justify-between'>
        <p>Subtotal</p>
        <p>{formatePrice(total_amount, 'INR')}</p>
      </div>
      <div className='flex justify-between text-sm mt-5'>
        <p>Shipping fee</p>
        <p className='text-red-500'>- {formatePrice(shipping_fee, 'INR')}</p>
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
        <h1 className='font-semibold text-2xl text-red-600'>{formatePrice(total_amount, 'INR')}</h1>
      </div>
      <NavLink
        to='/checkout-cart'
        className='bg-blue-500 duration-300 text-center py-1 text-white rounded-2xl hover:bg-blue-400'>
        Proceed to Checkout
      </NavLink>
    </div>
  );
}
