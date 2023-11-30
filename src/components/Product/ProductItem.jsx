import React from 'react';
import { NavLink } from 'react-router-dom';

import Star from '../../utils/Starts';
import {formatePrice} from '../../utils/helpers';

export default function ProductItem({ products }) {
  const {
    id,
    name,
    url,
    stars,
    ratings,
    reviews,
    ram,
    rom,
    display,
    camera,
    battery,
    price,
    shipping,
  } = products;

  return (
    <div className='md:flex-row flex gap-5 flex-col items-center justify-center my-5 border-b-2'>
      <div className='w-[180px] min-w-[160px] relative'>
        <img src={url} alt={id} />
        {shipping && (
          <p className='text-white text-xs text-center w-full bg-green-700 rounded absolute bottom-2'>
            Free Shipping Available
          </p>
        )}
      </div>
      <div className='font-medium text-gray-800 max-w-[400px] text-sm'>
        <NavLink
          to={`/product/${id}`}
          className='text-xl cursor-pointer underline font-semibold text-blue-600 hover:text-blue-800 line-clamp-1'>
          {name}
        </NavLink>
        <h4 className='my-2'>
          <Star starts={stars} reviews={reviews} ratings={ratings} className='justify-start' />
        </h4>
        <p>
          Storage: <span className='font-normal'>{`${ram} GB RAM | ${rom} GB ROM`}</span>
        </p>
        <p>
          Display: <span className='font-normal'>{`${display} Full HD+ Display`}</span>
        </p>
        <p>
          camera: <span className='font-normal'>{`${camera} MP Rear Camera`}</span>
        </p>
        <p>
          battery: <span className='font-normal'>{`${battery} mAh Battery`} </span>
        </p>
        <p>
          Accessories:{' '}
          <span className='font-normal'>
            Handset, Protective Case, Quick Start Guide, charger 22 W, Warranty Card Box Accessories
          </span>
        </p>
        <div className='my-3'>
          <h4>{`Price: ${formatePrice(price)}/-`}</h4>
        </div>
      </div>
    </div>
  );
}
