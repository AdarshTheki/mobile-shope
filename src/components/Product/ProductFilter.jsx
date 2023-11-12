import React from 'react';
import useContext from '../../context/useProductContext';
import FilterRange from './FilterOptions/RangeFilter';
import StorageFilter from './FilterOptions/StorageFilter';
import BrandFilter from './FilterOptions/BrandFilter';
import SearchBar from './FilterOptions/SearchBar';
import BatteryFilter from './FilterOptions/BatteryFilter';

export default function ProductFilter() {
  const { allProducts, clearAllFilter } = useContext();

  const battery = [3300, 3700, 4270, 4300, 4400, 4500, 4600, 4926, 4980, 5000, 6000];

  // const camera = allProducts?.map((product) => product?.processor);
  // const uniquecamera = [...new Set(camera?.sort())];
  // console.log(uniquecamera);

  return (
    <div className='py-5 w-[250px] max-h-[580px] overflow-y-auto overflow-x-hidden'>
      <h2 className='text-xl font-semibold text-center text-pink-500 uppercase border-b-2 border-gray-300'>
        Filters
      </h2>
      <div className='relative px-4 flex flex-col gap-5 pt-5'>
        {/* Search Filters */}
        <SearchBar />
        {/* Brands Filters */}
        <BrandFilter />
        {/* Storage Filters  */}
        <StorageFilter />
        {/* Range Filters */}
        <FilterRange />
        {/* Battery filters */}
        <BatteryFilter />

        {/* Clear all filters */}
        <button
          className='w-[200px] bg-red-600 hover:bg-red-800 py-1 px-3 rounded-lg text-white capitalize text-sm font-medium'
          onClick={() => clearAllFilter()}>
          clear all
        </button>
      </div>
    </div>
  );
}
