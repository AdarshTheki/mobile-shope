import React from 'react';
import useContext from '../context/useProductContext';

export default function SelectOptions({ option, label, name }) {
  const { updateFilterValue } = useContext();
  return (
    <div className='flex items-center w-full gap-2 my-1'>
      <label htmlFor={label} className='w-14 text-sm text-right font-normal'>
        {label}
      </label>
      <select
        onChange={updateFilterValue}
        name={name}
        id={label}
        className='w-[100px] text-sm text-center border border-gray-500 rounded cursor-pointer'>
        {option?.map((option) => (
          <option key={option} value={option}>
            {option || 'None'}
          </option>
        ))}
      </select>
    </div>
  );
}
