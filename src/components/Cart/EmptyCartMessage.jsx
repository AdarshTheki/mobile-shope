import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import useCarts from '../../context/useProductContext';
import Button from '../../utils/Button';

export default function EmptyCartMessage() {
  const { cartItems, clearAllCart } = useCarts();

  const clearAllCartHandler = () => {
    clearAllCart();
    toast.success('All Products Cleared from Carts !');
  };

  return (
    <div className='flex justify-between items-center font-medium'>
      <span className={`text-xl ${cartItems.length !== 0 ? '' : 'text-red-500'}`}>
        Total Products: {cartItems?.length}
      </span>
      <Button className='bg-red-600 text-xs uppercase' onClick={clearAllCartHandler}>
        Clear All
      </Button>
      <Toaster />
    </div>
  );
}
