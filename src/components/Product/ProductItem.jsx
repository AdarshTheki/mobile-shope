import React from 'react';
import { NavLink } from 'react-router-dom';

import Star from '../../utils/Starts';

export default function ProductItem({ products }) {
  const {
    id,
    name,
    img_url,
    stars,
    ratings,
    reviews,
    storage,
    display,
    camera,
    battery,
    processor,
    lunch_price,
    current_price,
    exchange_off,
    delivery,
    emi_price,
  } = products;

  return (
    <div className='mx-10 md:flex-row flex gap-5 flex-col items-center justify-center mb-10 sm:gap-10'>
      <div className='min-w-[180px] relative'>
        <img src={img_url} alt={id} />
        {delivery && (
          <p className='text-white bg-green-700 px-4 rounded-2xl absolute bottom-2'>
            Free Shipping Available
          </p>
        )}
        {emi_price && (
          <p className='bg-blue-600 px-4 rounded-2xl capitalize absolute bottom-10 text-white left-1'>
            upto <strong>&#8377;{emi_price}</strong> off
          </p>
        )}
      </div>
      <div className='capitalize font-medium text-gray-800 max-w-[400px] sm:text-base text-sm'>
        <NavLink
          to={`/product/${id}`}
          className='text-2xl underline font-semibold text-blue-600 hover:text-blue-800 line-clamp-1'>
          {name}
        </NavLink>
        <h4 className='my-2'>
          <Star starts={stars} /> {ratings} Ratings & {reviews} Reviews
        </h4>
        <p>
          Storage: <span className='font-normal'>{storage || '#NA'} Storage</span>
        </p>
        <p>
          Display: <span className='font-normal'>{display || '#NA'} Display</span>
        </p>
        <p>
          camera: <span className='font-normal'>{camera || '#NA'}</span>
        </p>
        <p>
          battery: <span className='font-normal'>{battery || '#NA'} mAh Battery</span>
        </p>
        <p>
          processor: <span className='font-normal'>{processor || '#NA'} processor</span>
        </p>
        <p>
          Accessories:{' '}
          <span className='font-normal'>
            Handset, Protective Case, Quick Start Guide, charger 22 W, Warranty Card Box Accessories
          </span>
        </p>
        <div className='my-3'>
          <h2>
            Price: &#8377;{current_price || '#NA'}
            <span className='line-through text-red-400 mx-2 text-sm'>{'Rs. ' + (lunch_price || 0)}</span>
            <span className='bg-green-200 text-green-700 px-3 py-1 text-sm rounded-lg'>
              {(exchange_off || 0) + ' % off'}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
