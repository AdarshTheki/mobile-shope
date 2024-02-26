import React from 'react';
import { useFilter } from '../context';

export default function SelectOptions({ option, label, name, more = '', value }) {
    const { updateFilters } = useFilter();
    return (
        <div className='my-1'>
            <label
                htmlFor={label}
                className='block cursor-pointer text-sm font-medium text-gray-900 dark:text-white'>
                {label}
            </label>
            <select
                onChange={updateFilters}
                value={value}
                name={name}
                id={label}
                className=' w-4/5 capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 hover:border-blue-500'>
                {option?.map((option) => (
                    <option key={option} value={option}>
                        {option} {option !== 'all' && more}
                    </option>
                ))}
            </select>
        </div>
    );
}
