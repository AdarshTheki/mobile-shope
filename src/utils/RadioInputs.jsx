import React from 'react';
import { useFilter } from '../context/Filter_Context';

export default function RadioInputs({ label, name, item, value }) {
  const { updateFilters } = useFilter();
  return (
    <div className='space-x-3 flex'>
      <input
        type='radio'
        name={name}
        checked={item == value}
        id={label}
        value={item}
        onChange={updateFilters}
      />
      <label htmlFor={label} className='flex cursor-pointer text-sm items-center gap-1'>
        {label}
      </label>
    </div>
  );
}
