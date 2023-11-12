import React from 'react';
import useProductContext from '../context/useProductContext';

export default function Checkboxes({ categories }) {
  const {
    toggleCategory,
    filters: { selectedCategories },
  } = useProductContext();
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
