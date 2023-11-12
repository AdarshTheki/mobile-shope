import React from 'react';
import useCarts from '../../context/useProductContext';
import toast, { Toaster } from 'react-hot-toast';
import CartMissing from './CartMissing';

export default function EmptyCartMessage() {
  const { cartItems, clearAllCart } = useCarts();

  const clearAllCartHandler = () => {
    clearAllCart();
    toast.success('All Products Cleared from Carts !');
  };

  return (
    <>
      <h1 className='text-3xl my-4 font-bold'>Shopping Cart</h1>
      <div className='flex justify-between items-center font-medium'>
        <span className={`text-xl ${cartItems.length !== 0 ? '' : 'text-red-500'}`}>
          Total Products: {cartItems?.length}
        </span>
        <button
          className='py-2 px-4 text-xs hover:bg-red-800 bg-red-600 text-white rounded-lg m-2 uppercase'
          onClick={clearAllCartHandler}>
          Clear All
        </button>
        <Toaster />
      </div>
      <div className='mx-auto w-full'>{cartItems.length === 0 && <CartMissing />}</div>
    </>
  );
}
