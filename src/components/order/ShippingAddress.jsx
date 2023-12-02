import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';

import { useCart } from '../../context/Cart_Context';
import { createProductItem } from '../../appwrite/postService';

export default function ShippingAddress() {
  const navigation = useNavigate();
  const userId = ID.unique();

  const { cart, clearCart } = useCart();
  const [loading, setLoading] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const formHandler = async (event) => {
    event.preventDefault();
    // console.log(cart);
    setLoading(true);
    if (cart.length > 0) {
      const body = JSON.stringify(cart);
      if (paymentMethod) {
        await createProductItem({ userId, body, payment: paymentMethod })
          .then((data) => {
            console.log(data);
            clearCart();
            navigation(`/order/success/${userId}`);
          })
          .catch((err) => toast.error(err.message));
      } else {
        toast.error('Please Select Payment Method');
      }
    } else {
      toast.error('Your cart is empty !');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className='my-3'>Payment</h2>
      {/* select payment option */}
      <form className=' space-x-5'>
        <label htmlFor='payment'>
          <input
            type='radio'
            value='cash on delivery'
            id='payment'
            checked={paymentMethod === 'cash on delivery'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />{' '}
          Cash on Delivery
        </label>
        <label htmlFor='payment2'>
          <input
            type='radio'
            value='stripe'
            id='payment2'
            checked={paymentMethod === 'stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />{' '}
          Stripe
        </label>
        <br />
        <br />
        <button
          onClick={formHandler}
          type='submit'
          className='bg-blue-600 px-6 py-1.5 rounded-3xl text-white hover:opacity-90 hover:scale-95 duration-300'>
          {loading ? 'Loading...' : 'Place Order →'}
        </button>
      </form>
      <Toaster />
    </div>
  );
}
