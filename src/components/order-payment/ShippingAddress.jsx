import React from 'react';
import { useForm } from 'react-hook-form';

import Inputs from '../../utils/Inputs';
import Button from '../../utils/Button';
import Address from './Address';

export default function ShippingAddress() {
  const [toggle, setToggle] = React.useState(false);
  const [shippingAddress, setShippingAddress] = React.useState('');
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setShippingAddress(data)
    // localStorage.setItem('shippingAddress', JSON.stringify(data));
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

      <hr className='border-gray-300 my-5' />

      <h2 className='my-3'>Payment</h2>
      {!toggle ? (
        <div className='flex justify-between w-1/2'>
          <label htmlFor='payment'>
            <input type='radio' name='' id='payment' /> Cash on Delivery
          </label>
          <label htmlFor='payment2'>
            <input type='radio' name='' id='payment2' /> Stripe
          </label>
        </div>
      ) : (
        <form className='grid grid-cols-2 gap-3 items-end' onSubmit={handleSubmit(submitHandler)}>
          <Inputs
            label='First Name'
            placeholder='Enter your first name'
            {...register('firstName')}
          />
          <Inputs label='Last Name' placeholder='Enter your last name' {...register('lastName')} />
          <Inputs label='Address Name' placeholder='Enter your address' {...register('address')} />
          <Inputs label='City' placeholder='Enter your city' {...register('city')} />
          <Inputs label='Country' placeholder='Enter your country' {...register('country')} />
          <Inputs
            label='Postal Code'
            placeholder='Enter your postal code'
            {...register('postal_code')}
          />
          <Inputs label='Phone' placeholder='Enter your phone number' {...register('phone_no')} />
          <Button type='submit' className='bg-green-600 mb-2'>
            Submit Address →
          </Button>
        </form>
      )}
    </div>
  );
}
