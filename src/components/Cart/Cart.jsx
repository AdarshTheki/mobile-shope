import React from 'react';
import GlobalContext from '../../context/GlobalContext';
import Button from '../../utils/Button';
import toast, { Toaster } from 'react-hot-toast';

export default function Cart({ id, name, img_url, count, current_price, color, RAM, ROM }) {
  const { increaseQty, decreaseQty, removeFromCart } = GlobalContext();

  const Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  const price = Rupees.format(current_price || 0);
  const totals = Rupees.format(count * current_price || 0);

  const cartRemoveHandler = (id) => {
    removeFromCart(id);
    toast.success('Remove your cart items');
  };

  return (
    <div className=' text-center space-y-1 border py-2 px-6 rounded-2xl shadow-xl'>
      <img src={img_url} alt={name} className='w-[100px] mx-auto' />
      <h4 className='text-blue-600 line-clamp-1'>{name}</h4>
      <p>
        Color:{' '}
        <span style={{ backgroundColor: color }} className='px-2 py-1 text-white text-xs'>
          {color}
        </span>
      </p>
      <p>Storage: {RAM + ' | ' + ROM}</p>
      <div className=' space-x-4'>
        <Button className='bg-gray-600 py-1 px-2' onClick={() => increaseQty(id)}>
          +
        </Button>
        <span className='outline-none focus:outline-none text-center w-8 bg-gray-100 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default text-gray-700'>
          {count}
        </span>
        <Button className='bg-gray-600 py-1 px-2' onClick={() => decreaseQty(id)}>
          -
        </Button>
      </div>
      <p>{count + ' × ' + price}</p>
      <h4>Totals: {totals}</h4>
      <Button onClick={() => cartRemoveHandler(id)} className='bg-red-600 uppercase text-xs'>
        Remove
      </Button>
      <Toaster />
    </div>
  );
}
