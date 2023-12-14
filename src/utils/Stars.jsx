import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function Starts({ starts, reviews, ratings, className = '' }) {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className='text-yellow-500'>
        {starts > number ? <BsStarFill /> : starts > index ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  return (
    <div className={`flex flex-wrap items-center space-x-2 ${className}`}>
      <span className='flex'>{tempStar}</span>{' '}
      {reviews && ratings && (
        <span className='text-sm'>
          ({reviews} reviews & {ratings} ratings)
        </span>
      )}
    </div>
  );
}
