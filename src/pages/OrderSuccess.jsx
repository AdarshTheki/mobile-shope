import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../utils/Button';

export default function OrderSuccess() {
  const navigation = useNavigate();
  return (
    <div className='flex my-10 flex-col items-center justify-center text-center gap-5'>
      <h1 className=' text-3xl'>✅</h1>
      <h1 className=' text-xl font-medium'>Order Successfully Complete!</h1>
      <p className='text-gray-600'>
        Thank you for completing your order. We have sent you an email with the details of your
        order.
      </p>
      <p>Have a great day!</p>
      <Button onClick={() => navigation('/order/track/2')} className='bg-blue-600'>
        Track Your Order →
      </Button>
    </div>
  );
}
