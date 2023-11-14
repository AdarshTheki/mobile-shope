import React from 'react';
import useProductContext from '../../context/useProductContext';
import Button from '../../utils/Button';

export default function Cart({
  id,
  name,
  img_url,
  count,
  current_price,
  color,
  storage,
}) {
  const { increaseQty, decreaseQty, removeFromCart } = useProductContext();

  const Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  const price = Rupees.format(current_price || 0);
  const totals = Rupees.format(count * current_price || 0);

  return (
    <div className='flex flex-col items-center text-center gap-2 border py-2 px-6 rounded-2xl shadow-xl'>
      <img src={img_url} alt={name} className='w-[100px]' />
      <h5 className=' font-medium text-blue-600 line-clamp-1'>{name}</h5>
      <p>
        Color:{' '}
        <span style={{ backgroundColor: color }} className='px-2 py-1 text-white text-xs'>
          {color}
        </span>
      </p>
      <p>{storage}</p>
      <div>
        <Button className='bg-gray-600 py-1 px-2' onClick={() => increaseQty(id)}>
          +
        </Button>
        <input
          type='number'
          name='number'
          id='readonly'
          value={count}
          readOnly
          className='outline-none focus:outline-none text-center w-16 bg-gray-100 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default text-gray-700'
        />
        <Button className='bg-gray-600 py-1 px-2' onClick={() => decreaseQty(id)}>
          -
        </Button>
      </div>
      <p>
        {count} X {price}
      </p>
      <h2 className='font-semibold text-gray-700'>Totals: {totals}</h2>
      <div className='flex'>
        <Button className='bg-green-600 text-sm uppercase'>Buy</Button>
        <Button onClick={() => removeFromCart(id)} className='bg-red-600 uppercase text-sm mx-2'>
          Remove
        </Button>
      </div>
    </div>
  );
}
