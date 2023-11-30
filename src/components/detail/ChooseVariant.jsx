import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ChooseVariant({ id, url, name, color, ram, rom, price }) {
  return (
    <div
      title={name}
      className='max-w-[140px] flex-grow hover:scale-125 duration-500 ease-out border-2 border-blue-300 rounded-lg shadow-lg'>
      <NavLink to={`/product/${id}`} className='flex gap-2 p-1'>
        <img src={url} alt='' width={50} className=' object-contain hover:scale-150 duration-500 hover:cursor-zoom-in' />
        <p className='text-xs font-medium line-clamp-4 text-gray-700 overflow-hidden'>{name}</p>
      </NavLink>
    </div>
  );
}
