// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useFilter } from '../../context';

export default function SearchBar() {
  const { filters, updateFilters } = useFilter();
  const { text } = filters;

  return (
    <form className='flex-grow'>
      <div className='relative w-full'>
        <input
          onChange={updateFilters}
          name='text'
          value={text}
          type='search'
          id='search-dropdown'
          className='block py-1.5 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
          placeholder='Name, brand & more...'
          required
        />
        <button
          type='submit'
          className='absolute h-full top-0 end-0 px-5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          <FaSearch />
          <span className='sr-only'>Search</span>
        </button>
      </div>
    </form>
  );
}
