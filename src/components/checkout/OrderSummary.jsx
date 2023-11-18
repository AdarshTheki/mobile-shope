import React from 'react';
import GlobalContext from '../../context/GlobalContext';

export default function OrderSummary() {
  const { cartItems } = GlobalContext();

  const Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  return (
    <div className='max-w-[800px] mx-auto pb-5'>
      <h1 className='font-medium text-xl my-3'>Order summary</h1>
      {cartItems?.map((item) => {
        const price = Rupees.format(item?.current_price || 0);
        const totals = Rupees.format(item?.count * item?.current_price || 0);
        return (
          <div key={item.id} className='p-2 flex gap-2 border-b border-gray-300'>
            <img src={item?.img_url} alt={item?.name} className='w-20 object-contain' />
            <div>
              <h2 className='font-medium line-clamp-1'>{item?.name}</h2>
              <p>
                Color:{' '}
                <span
                  style={{ backgroundColor: item?.color }}
                  className='px-2 py-1 text-xs rounded text-white'>
                  {item?.color}
                </span>
              </p>
              <p>{item?.storage}</p>
              <p>
                {price} × {item.count} = <span className='font-medium'>{totals}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
