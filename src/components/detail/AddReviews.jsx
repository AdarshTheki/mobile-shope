/* eslint-disable react/prop-types */
import React, { useState, useId } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Stars } from '../../utils';
import { useAuth, useReview } from '../../context';

const ratings = [
  { value: 1, label: 'unacceptable' },
  { value: 2, label: 'weak' },
  { value: 3, label: 'acceptable' },
  { value: 4, label: 'good' },
  { value: 5, label: 'excellent' },
];

export default function AddReviews({ name, url, id }) {
  const [message, setMessage] = useState({ label: '', content: '' });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { addReview } = useReview();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!message.label) return alert('Please select Ratings ⭐⭐⭐');
    if (!message.content) return alert('Please write a review message with 500 char');
    setLoading(true);
    let value;
    if (message.label === 'unacceptable') {
      value = 1;
    } else if (message.label === 'weak') {
      value = 2;
    } else if (message.label === 'acceptable') {
      value = 3;
    } else if (message.label === 'good') {
      value = 4;
    } else if (message.label === 'excellent') {
      value = 5;
    } else {
      value = null;
    }
    const payload = {
      user_name: user?.name,
      label: message.label,
      body: message.content,
      stars: value,
      name,
      url,
      id,
    };
    addReview(payload);
    toast.success('Reviews Add successfully...');
    setMessage({ label: '', content: '' });
    setLoading(false);
  };

  const RadioInputs = ({ label, value }) => {
    const Ids = useId();
    return (
      <label className='flex gap-5 items-center cursor-pointer' htmlFor={Ids}>
        <input
          type='radio'
          value={label}
          checked={message.label === label}
          onChange={(e) => setMessage({ ...message, label: e.target.value })}
          name='ratings'
          id={Ids}
        />
        <Stars starts={value} /> {label}
      </label>
    );
  };

  return (
    <div className='bg-white rounded-xl shadow space-y-4 p-5 mx-10'>
      <div className='flex space-x-4 items-center'>
        <img src={url} alt='product' width={60} />
        <h2 className='text-gray-700 font-medium'>{name}</h2>
      </div>
      <form className='capitalize' onSubmit={onSubmitHandler}>
        <p className='text-blue-500'>Ratings: </p>
        {ratings.map((input) => (
          <RadioInputs key={input.value} {...input} />
        ))}
        <label htmlFor='reviews' className='block my-2'>
          <span className='text-blue-500'>Reviews:</span>
          <textarea
            name='reviews'
            value={message.content}
            onChange={(e) => setMessage({ ...message, content: e.target.value })}
            id='reviews'
            maxLength={500}
            minLength={10}
            placeholder='write a reviews ...'
            className='w-full h-28 border text-sm border-gray-300 outline-none shadow-lg rounded-lg p-3'></textarea>
        </label>
        <button
          type='submit'
          className='block mx-auto hover:opacity-80 duration-300 bg-blue-600 px-10 py-2 text-sm text-white rounded-2xl'>
          {loading ? 'loading...' : 'Add Review'}
        </button>
      </form>
      <Toaster position='top-right' />
    </div>
  );
}
