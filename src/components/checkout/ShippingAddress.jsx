import React from 'react';
import { ID } from 'appwrite';
import Address from './AddressDisplay';
import AddressForm from './AddressForm';
import GlobalContext from '../../context/GlobalContext';
import { createPost } from '../../appwrite/postService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ShippingAddress() {
  const { cartItems } = GlobalContext();
  const [toggle, setToggle] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [shippingAddress, setShippingAddress] = React.useState('');
  const navigation = useNavigate();
  const uniqueId = ID.unique();

  React.useEffect(() => {
    setShippingAddress(JSON.parse(localStorage.getItem('shippingAddress')));
  }, [toggle]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const data = JSON.stringify(cartItems);
    createPost({ ...shippingAddress, payment: selectedValue, carts: data, userId: uniqueId })
      .then((user) => {
        console.log(user);
        toast.success('Order Placed Successfully');
        navigation(`/order/success/${uniqueId}`);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <h2 className='my-3'>Shipping Address</h2>
      <div className='grid lg:grid-cols-2 gap-2'>
        <div
          onClick={() => setToggle(!toggle)}
          className={` cursor-pointer rounded-xl p-4 max-w-[300px] ${
            !toggle ? 'border-2 border-blue-600' : 'border border-gray-400'
          }`}>
          <Address {...shippingAddress} />
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className={`cursor-pointer rounded-xl p-4 max-w-[300px] ${
            toggle ? 'border-2 border-blue-600' : 'border border-gray-400'
          }`}>
          <h4>+ Add new Address</h4>
        </div>
      </div>
      {toggle && <AddressForm setToggle={setToggle} />}
      <hr className='border-gray-300 my-5' />
      <h2 className='my-3'>Payment</h2>
      <form className=' space-x-5' onSubmit={formHandler}>
        <label htmlFor='payment'>
          <input
            type='radio'
            value='cash on delivery'
            id='payment'
            checked={selectedValue === 'cash on delivery'}
            onChange={handleRadioChange}
          />{' '}
          Cash on Delivery
        </label>
        <label htmlFor='payment2'>
          <input
            type='radio'
            value='stripe'
            id='payment2'
            checked={selectedValue === 'stripe'}
            onChange={handleRadioChange}
          />{' '}
          Stripe
        </label>
        <br />
        <button
          title={uniqueId}
          type='submit'
          className=' mt-5 bg-blue-600 px-4 py-2 rounded text-white font-medium hover:opacity-90 cursor-pointer'>
          Place Order
        </button>
      </form>
      <Toaster />
    </div>
  );
}
