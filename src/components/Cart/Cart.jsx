import React from 'react';
import useCartContext from '../../context/useCartContext';
import { formatePrice } from '../../utils/helpers';

export default function Cart({ id, name, image, amount, price, color, ram, rom }) {
  const { increaseQty, decreaseQty, removeItem } = useCartContext();

  return (
    <div className='w-full mb-3 flex gap-4 relative border py-2 px-6 rounded-2xl hover:shadow-xl shadow duration-500'>
      <div className='w-[120px]'>
        <img src={image} className='w-full object-contain mx-auto' />
      </div>
      <div className='flex gap-2 text-slate-600 flex-col justify-between text-sm'>
        <p className='text-blue-600'>{name}</p>
        <p className='space-x-4'>
          <span
            style={{ backgroundColor: color }}
            className='px-3 py-1 capitalize rounded-2xl text-white text-xs'>
            {color}
          </span>
          <span>{ram + 'GB | ' + rom} GB</span>
        </p>
        <p>Price: {formatePrice(price, 'INR')}</p>
        <div className='space-x-2'>
          <span>Qty:</span>
          <button
            className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
            onClick={() => increaseQty(id)}>
            +
          </button>
          <button className='border px-2 border-slate-300 rounded'>{amount}</button>
          <button
            className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
            onClick={() => decreaseQty(id)}>
            -
          </button>
          <button
            onClick={() => removeItem(id)}
            className='hover:bg-gray-500 px-1 text-black text-2xl absolute top-2 right-5 rounded-xl duration-300 '>
            ×
          </button>
        </div>
        <p className='font-medium'>Totals: {formatePrice(amount * price, 'INR')}</p>
      </div>
    </div>
  );
}
