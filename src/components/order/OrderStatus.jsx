import React from 'react';

export default function OrderStatus({dates}) {
  return (
    <>
      <h2>Order Status</h2>
      <div className='sm:w-3/4 mx-auto'>
        <p>Pending on {dates}</p>
        <div className='border-4 relative my-2'>
          <div className='border-4 absolute border-blue-600 w-1/3 rounded-2xl top-0 bottom-0'></div>
          <div className='flex my-2 justify-between absolute w-full'>
            <p>Pending</p>
            <p> Processing</p>
            <p> Shipped</p>
            <p> Delivered</p>
          </div>
        </div>
      </div>
    </>
  );
}
