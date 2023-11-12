import React from 'react';
import useProductContext from '../../context/useProductContext';
import Starts from '../../utils/Starts';
import Button from '../../utils/Button';

export default function Cart({
  id,
  stars,
  name,
  img_url,
  count,
  current_price,
  reviews,
  lunch_price,
}) {
  const { increaseQty, decreaseQty, removeFromCart } = useProductContext();

  const Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  const price = Rupees.format(current_price || 0);
  const old_Price = Rupees.format(lunch_price || 0);
  const totals = Rupees.format(count * current_price || 0);

  return (
    <div className='flex flex-col items-center text-center gap-2 border p-2 rounded-2xl shadow-xl'>
      <img src={img_url} alt={name} className='w-[100px]' />
      <h5 className=' font-medium text-blue-600 line-clamp-1'>{name}</h5>
      <div>
        <Starts starts={stars} />
        <span className='mx-4'>({reviews})</span>
      </div>
      <div className=' font-medium'>
        <span>{price}</span>
        <span className='line-through text-red-400 mx-4'>{old_Price}</span>
      </div>
      <div>
        <button
          className='text-2xl font-thin bg-gray-200 hover:bg-gray-400 px-2 cursor-pointer rounded'
          onClick={() => increaseQty(id)}>
          +
        </button>
        <input
          type='number'
          name='number'
          id='readonly'
          value={count}
          readOnly
          className='outline-none focus:outline-none mx-2 text-center w-10 bg-gray-100 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default text-gray-700'
        />
        <button
          className='text-2xl font-thin bg-gray-200 hover:bg-gray-400 px-2 cursor-pointer rounded'
          onClick={() => decreaseQty(id)}>
          -
        </button>
      </div>
      <p className='font-semibold'>
        {count} X {price}
      </p>
      <h2 className=' font-bold text-gray-700'>Totals: {totals}</h2>
      <div className='flex'>
        <button className='hover:bg-green-700 text-sm font-semibold bg-green-600 text-white px-3 rounded-lg uppercase'>
          Buy
        </button>
        <button
          onClick={() => removeFromCart(id)}
          className='hover:bg-red-700 text-sm font-semibold bg-red-600 text-white px-3 py-2 rounded-lg ml-2 uppercase'>
          Remove
        </button>
      </div>
    </div>
  );
}
