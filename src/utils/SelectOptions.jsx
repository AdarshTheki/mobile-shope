import React from 'react';
import { useFilter } from '../context/Filter_Context';

export default function SelectOptions({ option, label, name }) {
  const { updateFilters } = useFilter();
  return (
    <div className=' items-center w-full gap-2 my-1'>
      <label
        htmlFor={label}
        className='block cursor-pointer text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <select
        onChange={updateFilters}
        name={name}
        id={label}
        className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {option?.map((option) => (
          <option key={option} value={option}>
            {option || 'None'}
          </option>
        ))}
      </select>
    </div>
  );
}
