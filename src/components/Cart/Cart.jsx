import React from 'react';
import { useCart } from '../../context/Cart_Context';
import { formatePrice } from '../../utils/helpers';

export default function Cart({ id, name, amount, price }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <tr className='text-center relative shadow-md hover:shadow-2xl rounded-xl duration-700 ease-out'>
      <td className='px-2 py-2'>
        <p className='text-blue-600'>{name}</p>
      </td>
      <td className='px-2 py-2'>
        <p>{formatePrice(price)}</p>
      </td>
      <td className='px-2 py-2'>
        {/* <div className='w-[90px] mx-auto flex'> */}
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
        {/* </div> */}
      </td>
      <td className='px-2 py-2'>
        <p className='font-medium'>{formatePrice(amount * price)}/-</p>
      </td>
      <td className='px-2 py-2'>
        <button
          onClick={() => removeItem(id)}
          className='hover:text-red-500 text-black text-2xl duration-300 '>
          ×
        </button>
      </td>
    </tr>
  );
}
