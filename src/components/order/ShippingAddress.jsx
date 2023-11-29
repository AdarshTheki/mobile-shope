import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';

import AddressDisplay from './AddressDisplay';
import AddressForm from '../../utils/AddressForm';
import useCartContext from '../../context/useCartContext';
import { createProductItem } from '../../appwrite/postService';

export default function ShippingAddress() {
  const navigation = useNavigate();
  const userId = ID.unique();

  const { cart, clearCart } = useCartContext();
  const [toggle, setToggle] = React.useState(false);
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
      <h2 className='my-3'>Shipping Address</h2>
      <div className='grid lg:grid-cols-2 gap-2'>
        <div
          onClick={() => setToggle(!toggle)}
          className={` cursor-pointer rounded-xl p-4 max-w-[300px] hover:scale-95 shadow-lg duration-300 ${
            !toggle ? 'border-2 border-blue-500' : 'border-2 border-gray-300'
          }`}>
          <AddressDisplay />
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className={`cursor-pointer rounded-xl p-4 max-w-[300px] hover:scale-95 shadow-lg duration-300 ${
            toggle ? 'border-2 border-blue-500' : 'border-2 border-gray-300'
          }`}>
          <h4>+ Add new Address</h4>
        </div>
      </div>

      {/* Toggle Form */}
      {toggle && (
        <div>
          <hr className='border-gray-300 my-5' />
          <AddressForm setToggle={setToggle} />
        </div>
      )}

      <hr className='border-gray-300 my-5' />

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
