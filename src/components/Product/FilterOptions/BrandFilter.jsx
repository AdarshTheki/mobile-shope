import React from 'react';
import GlobalContext from '../../../context/GlobalContext';
import Checkboxes from '../../../utils/Checkboxes';

export default function BrandFilter() {
  const { allProducts, filterProducts, filters, clearAllCheckbox } = GlobalContext();
  const { selectedCategories } = filters;

  const categories = allProducts?.map((product) => product?.category);
  const uniqueCategory = [...new Set(categories)];

  return (
    <div>
      <div className='font-medium'>
        Brands: <span className='text-red-500 text-sm capitalize'>{filterProducts?.length}</span>
      </div>
      {selectedCategories.length > 0 && (
        <button
          className='text-blue-500 hover:text-blue-700 text-sm my-2 uppercase font-semibold cursor-pointer text-center'
          onClick={clearAllCheckbox}>
          clear all
        </button>
      )}
      <Checkboxes categories={uniqueCategory} />
    </div>
  );
}
