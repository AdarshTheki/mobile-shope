import React from 'react';
import { useCart } from '../../context';
import { formatePrice } from '../../utils';

export default function Cart({ id, name, amount, price, url }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className='text-center relative grid grid-cols-5 items-center py-2 mb-2'>
      <img src={url} alt='' width={60} className='object-contain' />
      <p className='text-gray-600 font-medium text-sm'>{name}</p>
      <p>{formatePrice(price)}</p>
      <div className='flex items-center'>
        <button
          className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
          onClick={() => increaseQty(id)}>
          +
        </button>
        <span className='border px-2 m-1 border-slate-300 rounded'>{amount}</span>
        <button
          className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
          onClick={() => decreaseQty(id)}>
          -
        </button>
      </div>
      <p className='font-medium'>Total: {formatePrice(amount * price)}</p>
      <button
        onClick={() => removeItem(id)}
        className='hover:text-red-500 absolute right-0 top-0 text-black text-2xl duration-300 '>
        ×
      </button>
    </div>
  );
}
