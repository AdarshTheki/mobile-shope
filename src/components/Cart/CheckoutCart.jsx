import React from 'react';
import { useCart } from '../../context/Cart_Context';
import { formatePrice } from '../../utils/helpers';
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function CheckoutCart() {
  const { total_amount, total_items, shipping_fee, couponCode, coupon_amount, coupon_code } =
    useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValue && ('BUY5' || 'BUY10' || 'BUY20')) {
      couponCode(isValue);
      setValue('');
      toast.success('Apply Code successfully', { duration: 3000, position: 'top-right' });
    } else {
      toast.error('coupon code is not valid !', { duration: 3000, position: 'top-right' });
    }
  };

  const [isValue, setValue] = React.useState('');

  return (
    <div className='grid gap-2 min-w-[250px]'>
      <h1 className='font-medium text-xl mb-3'>Order summary</h1>
      <hr />
      <div>
        <section className='flex justify-between'>
          <span>SubTotal</span>
          <span className='text-xl'>{formatePrice(total_amount)}</span>
        </section>
        <section className='flex justify-between'>
          <span>Items</span>
          <span>{total_items}</span>
        </section>
      </div>
      <hr />
      <form className='grid gap-1' onSubmit={handleSubmit}>
        <label htmlFor='couponCode' className=' cursor-pointer'>
          Have a coupon code ?
        </label>
        <div className='flex items-center '>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mr-3 text-white'>BUY5</p>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mr-3 text-white'>BUY10</p>
          <p className='text-xs bg-slate-600 px-2 py-0.5 mr-3 text-white'>BUY20</p>
        </div>
        <input
          id='couponCode'
          placeholder='Enter coupon code...'
          type='text'
          value={isValue}
          onChange={(e) => setValue(e.target.value)}
          className='border-2 border-green-600 px-4 py-1 mb-1 rounded shadow-xl placeholder:text-sm'
        />
        <button className='uppercase w-1/2 py-1 text-white bg-green-600 text-sm rounded font-medium hover:opacity-90'>
          apply code
        </button>
      </form>
      <hr />
      <div>
        <div className='flex justify-between text-sm'>
          <span>Shipping fee:</span>
          <span className='text-red-500'>+ {formatePrice(shipping_fee)}</span>
        </div>
        {coupon_amount !== 0 && (
          <div className='my-2'>
            <div className='text-sm flex justify-between text-green-500 bg-green-200 p-1 rounded'>
              <p>Apply Code:</p>
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
      <Toaster toastOptions={{ style: { borderRadius: 0 } }} />
    </div>
  );
}
