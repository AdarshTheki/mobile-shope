import React from 'react';
import GlobalContext from '../../../context/GlobalContext';

export default function FilterRange() {
  const { filters, updateFilterValue, allProducts } = GlobalContext();
  const { rating, price, review } = filters;

  const ratings = allProducts.map((product) => product?.ratings);
  const reviews = allProducts.map((product) => product?.reviews);
  const prices = allProducts.map((product) => product?.current_price);
  const ratingMAX = Math.max(...ratings);
  const reviewMAX = Math.max(...reviews);
  const priceMAX = Math.max(...prices);
  
  return (
    <div className=' capitalize'>
      <div className='flex'>
        <label htmlFor='rating' className=' cursor-pointer'>
          rating:{' '}
        </label>
        <input
          type='range'
          className='w-1/2 cursor-pointer mr-4'
          id='rating'
          name='rating'
          min='200'
          value={rating}
          step={Math.floor(ratingMAX / 4)}
          max={ratingMAX}
          onChange={updateFilterValue}
        />
        <span className='text-red-500'>{rating}</span>
      </div>
      <div className='flex'>
        <label htmlFor='review' className=' cursor-pointer'>
          review:{' '}
        </label>
        <input
          type='range'
          className='w-1/2 cursor-pointer mr-4'
          id='review'
          name='review'
          min='200'
          max={reviewMAX}
          step={Math.floor(reviewMAX / 4)}
          value={review || 0}
          onChange={updateFilterValue}
        />
        <span className='text-red-500'>{review}</span>
      </div>
      <div className='flex'>
        <label htmlFor='price' className=' cursor-pointer'>
          price
        </label>
        <input
          type='range'
          className='w-1/2 cursor-pointer mr-4'
          id='price'
          name='price'
          min='3000'
          step={Math.floor(priceMAX / 4)}
          max={priceMAX}
          value={price || 0}
          onChange={updateFilterValue}
        />
        <span className='text-red-500'>&#8377;{price}</span>
      </div>
    </div>
  );
}
