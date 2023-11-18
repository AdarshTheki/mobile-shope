import React from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Checkboxes({ categories }) {
  const { toggleCategory, filters } = GlobalContext();
  const { selectedCategories } = filters;
  
  return (
    <>
      {categories?.sort()?.map((category) => (
        <div key={category}>
          <label htmlFor={category} className='capitalize cursor-pointer hover:text-blue-700'>
            <input
              type='checkbox'
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />{' '}
            {category}
          </label>
        </div>
      ))}
    </>
  );
}
