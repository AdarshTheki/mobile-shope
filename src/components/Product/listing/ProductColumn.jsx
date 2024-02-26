/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatePrice, Stars } from '../../../utils';

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
    <div className='md:flex-row gap-5 flex flex-col bg-white items-center justify-center mx-2 my-4 py-4 rounded-xl'>
      <div className='max-w-[140px] relative'>
        <img src={url} alt={id} />
        {shipping && (
          <p className='text-white text-xs text-center w-full bg-green-700 rounded absolute bottom-2'>
            Free Shipping
          </p>
        )}
      </div>
      <div className='font-medium text-gray-800 max-w-[400px] text-sm'>
        <NavLink
          to={`/product/${id}`}
          className='text-lg cursor-pointer underline font-medium text-blue-600 hover:text-blue-800 line-clamp-1'>
          {name}
        </NavLink>
        <Stars starts={stars} reviews={reviews} ratings={ratings} className='justify-start' />
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
        <h4 className='text-lg'>{`Price: ${formatePrice(price)}/-`}</h4>
      </div>
    </div>
  );
}
