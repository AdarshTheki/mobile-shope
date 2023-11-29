import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import useCartContext from '../../context/useCartContext';
import Button from '../../utils/Button';

export default function TotalCartItem() {
  const { total_items, clearCart } = useCartContext();

  const clearAllCartHandler = () => {
    clearCart();
    toast.success('All Products Cleared from Carts !');
  };

  return (
    <div className='flex justify-between items-center font-medium'>
      <span className={`text-xl ${total_items !== 0 ? '' : 'text-red-500'}`}>
        Total Products: {total_items}
      </span>
      <Button className='bg-red-600 text-xs uppercase' onClick={() => clearAllCartHandler()}>
        Clear All
      </Button>
      <Toaster />
    </div>
  );
}
