import React from 'react';
import Star from '../utiles/Starts';
import Button from '../utiles/Button';

export default function ProductList({ products }) {
  return (
    <div className='sm:mx-auto mx-10 sm:w-[800px] sm:flex-row flex gap-5 flex-col mb-10 sm:gap-10'>
      <div className='w-[180px] mx-auto'>
        <img src={products?.phone_url} alt={products?.phone_id} className='pb-2' />
        <input type='checkbox' name={products?.phone_id} id={products?.phone_id} className='mr-4' />
        <label
          htmlFor={products?.phone_id}
          className='cursor-pointer font-semibold text-gray-500 hover:text-gray-800'>
          Add to Compare
        </label>
      </div>
      <div className='capitalize sm:w-[400px] mx-auto text-gray-800 sm:text-base text-sm'>
        <h1 className='text-xl font-semibold text-blue-600'>{products?.phone_name}</h1>
        <h6 className='font-semibold text-gray-600 py-2'>
          <Star starts={products?.stars} /> {products?.ratings} Ratings & {products?.reviews}{' '}
          Reviews
        </h6>
        <p>
          {products?.RAM} GB | {products?.ROM} ROM | Expandable Upto{' '}
          <span>{products?.expand_storage ? products?.expand_storage + 'TB' : 'none'}</span>
        </p>
        <p>
          {products?.display_cm} cm ({(products?.display_cm * 0.3937).toFixed(1)}inches) Full HD+
          Display
        </p>
        <p>
          {products?.rear_camera +
            'MP + ' +
            products?.rear_camera2 +
            'MP front camera ' +
            products?.front_camera +
            'MP'}
        </p>
        <p>{products?.battery} mAh Battery</p>
        <p>{products?.processor} processor</p>
        <p>Handset, Protective Case, Quick Start Guide, charger 22 W, Warranty Card</p>
      </div>
      <div className='text-gray-500 text-sm sm:w-[180px] grid gap-2 items-center'>
        <p className='text-2xl text-black font-semibold'>Rs. &#8377;{products?.current_price}</p>
        <p className='font-bold'>
          <span className='text-red-700 px-3 py-1 rounded bg-red-200 line-through'>
            &#8377;{products?.lunch_price}
          </span>{' '}
          <span className='text-green-700 px-3 py-1 rounded bg-green-200'>
            {products?.percent_off}&#37; off
          </span>
        </p>
        <p className={`${products?.free_delivery ? 'text-green-600' : 'text-red-600'} font-bold`}>
          Free Shipping
        </p>
        <p className=''>
          No cost EMI starting from Rs.{' '}
          <span className='text-black font-semibold'>&#8377;{products?.EMI}</span>/month
        </p>
        <Button className='bg-gray-700 hover:bg-gray-800 text-white'>Add to Cart</Button>
        <Button className=' bg-green-600 hover:bg-green-700 text-white'>Buy item</Button>
      </div>
    </div>
  );
}
