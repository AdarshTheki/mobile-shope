import React, { useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import Inputs from '../../../utils/Inputs';

export default function SearchBar() {
  const { filters, updateFilterValue, clearAllFilter, allProducts } = GlobalContext();
  const { text } = filters;

  const [show, setShow] = useState('');

  return (
    <div>
      {text && <span className='text-sm text-red-500 capitalize'>{text}</span>}
      <Inputs
        label='Search'
        type='text'
        placeholder='Search name, brand...'
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
              <div key={item?.id} className='flex hover:scale-110 duration-300 w-full my-4'>
                <div className='w-8'>
                  <img src={item?.img_url} alt='mg' className='' />
                </div>
                <button
                  onClick={() => {
                    updateFilterValue({ target: { name: 'text', value: item.name.slice(0, 20) } });
                    setShow('');
                  }}
                  className='hover:bg-gray-800 text-xs text-left w-full hover:text-white px-2 font-semibold'>
                  {item.name}
                </button>
              </div>
            ))}
        </div>
      )}
      {show && (
        <button
          className='absolute top-5 right-5 hover:bg-gray-800 rounded-md font-medium'
          onClick={() => setShow('')}>
          ❌
        </button>
      )}
      {text && (
        <button
          className='absolute top-5 right-5 hover:bg-gray-800 rounded-md font-medium'
          onClick={() => clearAllFilter()}>
          ❌
        </button>
      )}
    </div>
  );
}
