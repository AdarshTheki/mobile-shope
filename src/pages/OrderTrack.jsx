import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderTrack() {
  const { orderId } = useParams();
  return (
    <div className='container mx-auto py-10 px-5 space-y-5'>
      <div className='sm:flex justify-between'>
        <h1 className='text-3xl font-medium'>
          Order #<span className='uppercase'>32j3df3{orderId}</span>
        </h1>
        <p className='text-blue-500'>Order placed Tue Nov 14 2023</p>
      </div>
      <div className=' sm:columns-2'>
        <div>
          <h2>Products Purchased</h2>
          <div className='space-y-3'>
            <div>
              <h4>your name</h4>
              <p>$2500</p>
            </div>
            <div>
              <h4>product name</h4>
              <p>$2500</p>
            </div>
            <div>
              <h4>Delivery address</h4>
              <p className=' max-w-sm'>
                Maxime cupidatat tem Commodo enim quo vol Praesentium rerum ex, Aut tempor eiusmod n
              </p>
            </div>
            <div>
              <h4>Shipping updates</h4>
              <p>manager@gmail.com</p>
              <p>+1 (917) 884-4263</p>
              <p className='text-blue-500 font-medium'>Edit</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Billing Summary</h2>
          <div className=' columns-2 space-y-4'>
            <p>
              Total Price <br /> $6000
            </p>
            <p>
              Payment Method <br /> cash on delivery
            </p>
            <p>
              Payment Status <br /> Not Paid
            </p>
            <p>
              Currency <br /> Not Specified
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Order Status</h2>
        <div className='sm:w-3/4 mx-auto'>
          <p>Pending on Tue Nov 14 2023</p>
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
      </div>
    </div>
  );
}
