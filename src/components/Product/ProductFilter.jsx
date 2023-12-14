import React from 'react';
import FilterColors from './filters/FilterColors';
import FilterRatings from './filters/FilterRatings';
import FilterCheckbox from './filters/FilterCheckbox';
import { useFilter } from '../../context';
import { formatePrice } from '../../utils';

export default function ProductFilter() {
  const { filters, updateFilters, clearFilters } = useFilter();
  const { min_price, price, max_price, shipping } = filters;

  return (
    <div className='min-w-[210px] max-w-[250px] bg-slate-200 p-2'>
      <form onSubmit={(e) => e.preventDefault()} className='space-y-2 capitalize'>
        {/* Category, Ram, Camera, Battery, Display filters in multi-checkboxes */}
        <FilterCheckbox />
        <FilterRatings />
        <FilterColors />
        <div className='bg-white pl-4 py-2 rounded-lg'>
          {/* price */}
          <label htmlFor='priceRange' className='text-gray-800 text-sm'>
            {formatePrice(price)}
          </label>
          <input
            type='range'
            name='price'
            id='priceRange'
            min={min_price}
            max={max_price}
            step={(min_price + max_price) / 10}
            value={price}
            onChange={updateFilters}
          />
          {/* shipping */}
          <div className='mt-2 space-x-2'>
            <label htmlFor='shipping'>free shipping: </label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </div>
      </form>

      {/* Clear all filters */}
      <button
        className='bg-red-600 hover:bg-red-800 block mx-auto py-1 px-8 rounded mt-2 text-white capitalize text-sm font-medium'
        onClick={() => clearFilters()}>
        clear all
      </button>
    </div>
  );
}
