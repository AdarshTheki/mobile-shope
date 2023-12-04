import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilter } from '../../context/Filter_Context';
import { getUniqueValues, formatePrice } from '../../utils/helpers';
import SelectOptions from '../../utils/SelectOptions';
import RadioInputs from '../../utils/RadioInputs';

export default function ProductFilter() {
  const { filters, updateFilters, all_products, clearFilters } = useFilter();
  const {
    text,
    category,
    color,
    battery,
    camera,
    display,
    min_price,
    price,
    max_price,
    shipping,
    stars,
  } = filters;

  const batteries = getUniqueValues(all_products, 'battery');
  const cameras = getUniqueValues(all_products, 'camera');
  const displays = getUniqueValues(all_products, 'display');
  const categories = getUniqueValues(all_products, 'category');
  const colors = getUniqueValues(all_products, 'color');
  console.log(color);

  const NameShow = ({ name }) => {
    return (
      <div className='flex gap-1 items-center mt-2 mb-1 text-sm'>
        <hr className='border-gray-400 flex-grow' />
        <span className='uppercase text-gray-600 font-semibold'>{name}</span>
        <hr className='border-gray-400 flex-grow' />
      </div>
    );
  };

  return (
    <div className='min-w-[205px] max-w-[250px] bg-gray-200 p-2'>
      <div className='relative flex flex-col gap-5'>
        <form onSubmit={(e) => e.preventDefault()} className='space-y-4 capitalize'>
          {/* search */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'search'} />
            <input
              className='border border-gray-500 w-full px-2 rounded placeholder:text-sm placeholder:text-gray-400'
              type='text'
              name='text'
              value={text}
              placeholder='brand, name & more...'
              onChange={updateFilters}
            />
          </div>
          {/* category */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'category'} />
            <div className='flex flex-wrap items-start gap-2'>
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  name='category'
                  type='button'
                  className={`flex-grow text-sm rounded-lg capitalize shadow hover:bg-blue-600 hover:text-white duration-300 px-2 border ${
                    category === c ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* battery */}
          <div className='bg-white p-2 rounded-lg'>
            <SelectOptions
              option={batteries}
              name={'battery'}
              label={'Battery: '}
              more='mAh'
              value={battery}
            />
          </div>
          {/* camera */}
          <div className='bg-white p-2 rounded-lg'>
            <SelectOptions
              option={cameras}
              name={'camera'}
              label={'Camera: '}
              more='MP camera'
              value={camera}
            />
          </div>
          {/* display */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'display'} />
            {displays.map((size) => (
              <RadioInputs key={size} label={size} item={size} name={'display'} value={display} />
            ))}
          </div>

          {/* stars */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'ratings'} />
            <RadioInputs label={'All'} name='stars' item={'all'} value={stars} />
            <RadioInputs label={'below & 4.0 ★'} name='stars' item={4} value={stars} />
            <RadioInputs label={'4.1 & 4.2 ★'} name='stars' item={4.2} value={stars} />
            <RadioInputs label={'4.3 & 4.4 ★'} name='stars' item={4.4} value={stars} />
            <RadioInputs label={'4.6 & above ★'} name='stars' item={4.6} value={stars} />
          </div>

          {/* color */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'colors'} />
            <div className='flex items-center justify-start gap-x-3.5'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      style={{ backgroundColor: c }}
                      className={`${color === 'all' ? 'text-red-500 p-0' : ''}`}>
                      All
                    </button>
                  );
                }
                return (
                  <button
                    title={c}
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? 'p-1 text-red-500 flex-grow rounded-full border border-black/60'
                        : 'p-2 bg-gray-800 flex-grow border border-black/60 rounded-full'
                    }`}
                    data-color={c}
                    onClick={updateFilters}>
                    {color === c ? <FaCheck fontSize={10} /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* price */}
          <div className='bg-white p-2 rounded-lg'>
            <NameShow name={'price'} />
            <p className='text-gray-800 text-sm'>{formatePrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              step={(min_price + max_price) / 10}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* shipping */}
          <div className='bg-white p-2 rounded-lg'>
            <label htmlFor='shipping'>free shipping: </label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </form>

        {/* Clear all filters */}
        <div className='bg-white p-2 rounded-lg'>
          <button
            className='w-full bg-red-600 hover:bg-red-800 py-1 px-3 rounded-lg text-white capitalize text-sm font-medium'
            onClick={() => clearFilters()}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}
