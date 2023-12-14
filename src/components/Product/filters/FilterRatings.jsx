import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useFilter } from '../../../context';

export default function FilterRatings() {
  const { filters, all_products, updateFilters } = useFilter();
  const { stars } = filters;

  const Stars = ({ star }) => {
    const tempStar = Array.from({ length: 5 }, (_, index) => {
      const number = index + 0.5;
      return (
        <span key={index}>
          {star > number ? <BsStarFill /> : star > index ? <BsStarHalf /> : <BsStar />}
        </span>
      );
    });
    return (
      <div>
        <span className='flex text-yellow-600 space-x-1 text-sm'>{tempStar}</span>
      </div>
    );
  };

  const RadioInputs = ({ value }) => {
    let totalItems = all_products.filter((i) => Math.round(i.stars) === value);
    return (
      <div className='space-x-3 flex'>
        <input
          type='radio'
          name='stars'
          checked={stars === value}
          id={value}
          value={value}
          onChange={updateFilters}
        />
        <label htmlFor={value} className='flex cursor-pointer text-xs items-center gap-1'>
          <Stars star={value} /> <span className='text-gray-400'>({totalItems.length})</span>
        </label>
      </div>
    );
  };

  return (
    <div className='bg-white pl-4 py-2 rounded-lg'>
      <h2 className='uppercase text-sm text-gray-600'>Ratings</h2>
      <div className='space-x-3 flex'>
        <input
          type='radio'
          name='stars'
          checked={stars === 0}
          id='allStars'
          value={0}
          onChange={updateFilters}
        />
        <label htmlFor='allStars' className='flex cursor-pointer text-xs items-center gap-1'>
          all
        </label>
      </div>
      {[1, 2, 3, 4, 5].map((i) => (
        <RadioInputs key={i} value={i} />
      ))}
    </div>
  );
}
