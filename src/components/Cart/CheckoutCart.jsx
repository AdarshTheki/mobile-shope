import React from 'react';
import { useCart } from '../../context/Cart_Context';
import { formatePrice } from '../../utils/helpers';
import { Inputs } from '../../utils/index';
import { NavLink } from 'react-router-dom';

export default function CheckoutCart() {
  const { total_amount, total_items, shipping_fee, couponCode, coupon_amount, coupon_code } =
    useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    couponCode(isValue);
    setValue('');
  };

  const [isValue, setValue] = React.useState('');

  return (
    <div className='grid gap-2 min-w-[250px]'>
      <h1 className='font-medium text-xl mb-3'>Order summary</h1>
      <hr />
      <div>
        <div className='flex justify-between'>
          <span>SubTotal</span>
          <span>{formatePrice(total_amount)}</span>
        </div>
        <div className='flex justify-between'>
          <span>Items</span>
          <span>{total_items}</span>
        </div>
      </div>
      <hr />
      <form className='grid gap-2' onSubmit={handleSubmit}>
        <label htmlFor='couponCode' className=' cursor-pointer'>
          Have a coupon code ?
        </label>
        <div className='flex items-center '>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mx-2 text-white'>BUY5</p>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mx-2 text-white'>BUY10</p>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mx-2 text-white'>BUY20</p>
        </div>
        <div className='flex w-full'>
          <input
            id='couponCode'
            placeholder='Enter coupon code...'
            type='text'
            value={isValue}
            onChange={(e) => setValue(e.target.value)}
            className='border w-1/2 border-blue-600 px-4 py-1 shadow-xl placeholder:text-sm'
          />
          {coupon_amount === 0 && (
            <button className='uppercase px-4 text-white bg-blue-600 font-medium text-sm hover:opacity-90'>
              Go
            </button>
          )}
        </div>
      </form>
      <hr />
      <div>
        <div className='flex justify-between text-sm'>
          <p>Shipping fee</p>
          <p className='text-red-500'>+ {formatePrice(shipping_fee)}</p>
        </div>
        {coupon_amount !== 0 && (
          <div className='my-2'>
            <div className='text-sm flex justify-between text-green-500 bg-green-200 p-1 rounded'>
              <p>Code:</p>
              <p>{coupon_code}</p>
            </div>
            <div className='text-sm flex justify-between text-green-500 bg-green-200 p-1 rounded'>
              <p>Amount:</p>
              <p className=''>{formatePrice(coupon_amount)}</p>
            </div>
          </div>
        )}
        <div className='flex justify-between'>
          <h3>Order Total</h3>
          <h1 className='font-semibold text-2xl text-red-600'>
            {formatePrice(total_amount + shipping_fee - coupon_amount)}
          </h1>
        </div>
      </div>
      <hr />
      <NavLink
        to='/order-payment'
        className='bg-blue-500 block duration-300 text-center py-1 text-white rounded hover:bg-blue-400'>
        Proceed to Checkout
      </NavLink>
    </div>
  );
}
