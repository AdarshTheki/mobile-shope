import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

const ratings = [
  { id: 1, label: 'unacceptable' },
  { id: 2, label: 'weak' },
  { id: 3, label: 'acceptable' },
  { id: 4, label: 'good' },
  { id: 5, label: 'excellent' },
];

export default function ProductReviews({ id, name, url }) {
  const [message, setMessage] = useState({ label: '', content: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
  };

  const Stars = ({ star }) => {
    const tempStar = Array.from({ length: 5 }, (_, index) => {
      return <span key={index}>{star > index ? <BsStarFill /> : <BsStar />}</span>;
    });
    return <span className='flex text-yellow-600 space-x-1 text-base'>{tempStar}</span>;
  };

  return (
    <div className='max-w-sm mx-auto space-y-4'>
      <h2 className='text-center underline'>Products reviews</h2>
      <div className='flex space-x-4 justify-center items-center'>
        <img src={url} alt='product' width={60} />
        <h2 className='text-blue-500 text-lg font-medium'>{name}</h2>
      </div>
      <form className='space-y-2 capitalize' onSubmit={onSubmitHandler}>
        <div className='grid'>
          <label className='flex gap-5 items-center' htmlFor='unacceptable'>
            <input
              type='radio'
              value='unacceptable'
              checked={message.label === 'unacceptable'}
              onChange={(e) => setMessage({ ...message, label: e.target.value })}
              name='ratings'
              id='unacceptable'
            />
            <Stars star={1} /> unacceptable
          </label>
          <label className='flex gap-5 items-center' htmlFor='weak'>
            <input
              type='radio'
              value='weak'
              checked={message.label === 'weak'}
              onChange={(e) => setMessage({ ...message, label: e.target.value })}
              name='ratings'
              id='weak'
            />
            <Stars star={2} /> weak
          </label>
          <label className='flex gap-5 items-center' htmlFor='acceptable'>
            <input
              type='radio'
              value='acceptable'
              checked={message.label === 'acceptable'}
              onChange={(e) => setMessage({ ...message, label: e.target.value })}
              name='ratings'
              id='acceptable'
            />
            <Stars star={3} /> acceptable
          </label>
          <label className='flex gap-5 items-center' htmlFor='good'>
            <input
              type='radio'
              value='good'
              checked={message.label === 'good'}
              onChange={(e) => setMessage({ ...message, label: e.target.value })}
              name='ratings'
              id='good'
            />
            <Stars star={4} /> good
          </label>
          <label className='flex gap-5 items-center' htmlFor='excellent'>
            <input
              type='radio'
              value='excellent'
              checked={message.label === 'excellent'}
              onChange={(e) => setMessage({ ...message, label: e.target.value })}
              name='ratings'
              id='excellent'
            />
            <Stars star={5} /> excellent
          </label>
        </div>
        <div>
          <label htmlFor='reviews' className='block'>
            Reviews:
          </label>
          <textarea
            name={message.content}
            onChange={(e) => setMessage({ ...message, content: e.target.value })}
            id='reviews'
            placeholder='Please enter your message...'
            className='w-full border-2 outline-none shadow-lg rounded-lg p-3'></textarea>
        </div>
        <button
          type='submit'
          className='block mx-auto hover:opacity-80 duration-300 bg-blue-600 px-10 py-2 text-sm font-medium text-white rounded-2xl'>
          Submit
        </button>
      </form>
    </div>
  );
}
