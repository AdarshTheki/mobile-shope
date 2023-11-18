import React from 'react';
import { NavLink } from 'react-router-dom';

import Starts from '../../utils/Starts';

export default function Items({ product }) {
  return (
    <NavLink
      to={`/product/${product?.id}`}
      key={product?.id}
      className='flex shadow-xl hover:scale-105 duration-300 flex-col justify-between gap-2 text-center border border-gray-300 rounded-2xl px-4 py-2'>
      <img
        src={product?.img_url}
        alt={product?.name}
        className='mx-auto w-24 max-h-40 object-contain'
      />
      <div>
        <Starts starts={product?.stars} />
        <span className='mx-2'>({product?.ratings})</span>
      </div>
      <h1 className=' font-medium text-gray-700 w-[200px]'>{product?.name}</h1>
      {/* <button className='py-2 w-full rounded text-sm uppercase bg-gray-800 hover:opacity-90 text-white'>
        details
      </button> */}
    </NavLink>
  );
}
