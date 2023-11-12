import React from 'react';
import useProductContext from '../../context/useProductContext';

export default function CartsTotals() {
  const { cartItems } = useProductContext();

  const counts = cartItems.reduce((total, curr) => total + curr.count * curr.current_price, 0);

  let Rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div>
      <h1 className='text-right font-semibold'>Totals: {Rupees.format(counts)}</h1>
    </div>
  );
}
