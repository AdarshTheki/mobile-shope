import React from 'react';
import Starts from '../../utils/Starts';
import { formatePrice } from '../../utils/helpers';
import { NavLink } from 'react-router-dom';

export default function Items({ product }) {
  return (
    <NavLink
      to={`/product/${product?.id}`}
      className='flex-grow min-w-[200px] ml-4 mb-4 grid gap-2 items-center justify-center lg:w-1/5 sm:1/4 shadow hover:shadow-xl hover:scale-95 duration-500 text-center text-gray-800 border border-gray-300 rounded-2xl px-4 py-2'>
      <img
        src={product?.url}
        alt={product?.name}
        className='mx-auto w-24 max-h-40 object-contain'
      />
      <Starts
        starts={product?.stars}
        ratings={product?.ratings}
        reviews={product?.reviews}
        className='justify-center'
      />
      <p className='text-gray-800'>Price: {formatePrice(product.price)}/-</p>
      <h1 className='font-medium text-base text-blue-600'>{product?.name}</h1>
    </NavLink>
  );
}
