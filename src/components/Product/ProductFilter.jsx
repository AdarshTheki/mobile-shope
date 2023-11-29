import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useFilter } from '../../context/Filter_Context';
import { getUniqueValues, formatePrice } from '../../utils/helpers';
import BatteryFilter from './FilterOptions/BatteryFilter';

export default function ProductFilter() {
  const { filters, updateFilters, all_products, clearFilters } = useFilter();
  const { text, category, stars, min_price, price, max_price, shipping } = filters;

  const categories = getUniqueValues(all_products, 'category');

  return (
    <div className='py-5 w-[250px] max-h-screen'>
      <div className='relative px-4 flex flex-col gap-5 pt-5'>
        <form onSubmit={(e) => e.preventDefault()} className='space-y-4 capitalize'>
          {/* search */}
          <div>
            <input
              className='border border-gray-500 w-full px-5 rounded'
              type='text'
              name='text'
              value={text}
              placeholder='Search...'
              onChange={updateFilters}
            />
          </div>
          {/* category */}
          <div>
            <p>category:</p>
            <div className='flex flex-wrap items-start gap-2'>
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  name='category'
                  type='button'
                  className={`flex-grow text-sm rounded capitalize px-2 border ${
                    category === c ? 'bg-gray-800 text-white' : 'border-gray-500'
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* battery */}
          <BatteryFilter />
          {/* price */}
          <div>
            <p className='text-gray-900'>Price:</p>
            <p>{formatePrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              step={(min_price + max_price) / 6}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* shipping */}
          <div>
            <label htmlFor='shipping'>free shipping: </label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* stars */}
          <div>
            <p className='text-gray-900'>Ratings:</p>
            <div className='space-y-1 capitalize'>
              <div className='space-x-3 flex'>
                <input
                  type='radio'
                  name='stars'
                  checked={stars === 'all'}
                  id='all'
                  value={'all'}
                  onChange={updateFilters}
                />
                <label htmlFor='all' className='flex cursor-pointer items-center gap-1'>
                  all
                </label>
              </div>
              <div className='space-x-3 flex'>
                <input
                  type='radio'
                  name='stars'
                  checked={stars === '4'}
                  id='3'
                  value={4}
                  onChange={updateFilters}
                />
                <label htmlFor='3' className='flex cursor-pointer items-center gap-1'>
                  3.0 & 4.0 <FaStar color='orange' />
                </label>
              </div>
              <div className='space-x-3 flex'>
                <input
                  type='radio'
                  name='stars'
                  checked={stars === '4.2'}
                  id='4'
                  value={4.2}
                  onChange={updateFilters}
                />
                <label htmlFor='4' className='flex cursor-pointer items-center gap-1'>
                  4.1 & 4.2 <FaStar color='orange' />
                </label>
              </div>
              <div className='space-x-3 flex'>
                <input
                  type='radio'
                  name='stars'
                  checked={stars === '4.4'}
                  id='5'
                  value={4.4}
                  onChange={updateFilters}
                />
                <label htmlFor='5' className='flex cursor-pointer items-center gap-1'>
                  4.4 & 4.4 <FaStar color='orange' />
                </label>
              </div>
              <div className='space-x-3 flex'>
                <input
                  type='radio'
                  name='stars'
                  checked={stars === '4.6'}
                  id='6'
                  value={4.6}
                  onChange={updateFilters}
                />
                <label htmlFor='6' className='flex cursor-pointer items-center gap-1'>
                  4.5 & 5.0 <FaStar color='orange' />
                </label>
              </div>
            </div>
          </div>
        </form>

        {/* <SearchBar /> */}
        {/* <BrandFilter /> */}
        {/* <StorageFilter /> */}
        {/* <FilterRange /> */}
        {/* <BatteryFilter /> */}

        {/* Clear all filters */}
        <button
          className='block bg-red-600 hover:bg-red-800 py-1 px-3 rounded-lg text-white capitalize text-sm font-medium'
          onClick={() => clearFilters()}>
          clear all
        </button>
      </div>
    </div>
  );
}
