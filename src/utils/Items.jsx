import React from 'react';

export default function Cart({ id, name, image, amount, price, color, ram, rom }) {
  const Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  return (
    <div className='w-full mb-2 flex gap-4 border py-2 px-6 rounded-2xl hover:shadow-xl hover:scale-95 shadow duration-500'>
      <div className='w-[80px]'>
        <img src={image} className='w-full object-contain mx-auto' />
      </div>
      <div className='flex flex-col justify-between text-sm'>
        <p className='text-blue-600'>{name}</p>
        <p className='space-x-4'>
          Color:{' '}
          <span
            style={{ backgroundColor: color }}
            className='px-2 py-1 rounded capitalize text-white text-xs'>
            {color}
          </span>
          <span>Storage: {ram + 'GB | ' + rom} GB</span>
        </p>
        <div className='space-x-4'>
          <span>
            {amount} x {Rupees.format(price)}
          </span>
          <span className='font-medium text-black/90'>Totals: {Rupees.format(amount * price)}</span>
        </div>
      </div>
    </div>
  );
}
