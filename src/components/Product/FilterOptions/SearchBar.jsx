import React, { useState } from 'react';
import useProductContext from '../../../context/useProductContext';

export default function SearchBar() {
  const { filters, updateFilterValue, clearAllFilter } = useProductContext();
  const { text } = filters;

  const [show, setShow] = useState('');

  return (
    <div>
      <label htmlFor='searchBox' className='font-medium cursor-pointer'>
        Search:
      </label>
      <br />
      {text && <span className='text-sm text-red-500 capitalize'>{text}</span>}
      <input
        type='text'
        id='searchBox'
        placeholder='search name, brand...'
        className='border-b-2 border-blue-600 py-1 px-3 w-full placeholder:capitalize'
        name='text'
        value={show}
        autoComplete='off'
        onChange={(e) => setShow(e.target.value)}
      />
      {show && (
        <div className='w-full absolute pl-5 top-15 left-0 right-0 shadow-2xl max-h-[400px] bg-slate-100 overflow-y-scroll overflow-x-hidden rounded-lg mx-auto'>
          {allProducts
            .filter((item) => item.name.toLowerCase().includes(show.toLowerCase()))
            .map((item) => (
              <div
                key={item?.id}
                className='flex hover:relative hover:scale-150 hover:translate-x-8 duration-300 w-full my-4'>
                <div className='w-8'>
                  <img src={item?.img_url} alt='mg' className='' />
                </div>
                <button
                  onClick={() => {
                    updateFilterValue({ target: { name: 'text', value: item.name } });
                    setShow('');
                  }}
                  className='hover:bg-gray-800 text-xs text-left w-full hover:text-white px-2 font-semibold'>
                  {item.name}
                </button>
              </div>
            ))}
        </div>
      )}
      {text && (
        <button
          className='absolute top-5 right-5 hover:bg-red-400 font-medium'
          onClick={() => clearAllFilter()}>
          ❌
        </button>
      )}
    </div>
  );
}
