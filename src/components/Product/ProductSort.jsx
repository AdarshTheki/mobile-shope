import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilter } from '../../context/Filter_Context';

export default function ProductSort() {
  const { filtered_products, updateSort, sort, grid_view, setGridView, setListView } = useFilter();
  return (
    <div className='w-full text-sm capitalize flex gap-4 items-center justify-between px-10 py-5'>
      <div className='flex gap-2'>
        <button onClick={setGridView} className={`border p-1 rounded border-gray-800 ${grid_view ? 'text-white bg-gray-800' : null}`}>
          <BsFillGridFill fontSize={15} />
        </button>
        <button onClick={setListView} className={`border p-1 rounded border-gray-800 ${!grid_view ? 'text-white bg-gray-800' : null}`}>
          <BsList fontSize={15} />
        </button>
      </div>
      <div>{filtered_products?.length} products Found</div>
      <hr className='flex-grow border-gray-300' />
      <form>
        <label htmlFor='12345'>sort by: </label>
        <select
          name='sort'
          id='12345'
          onChange={updateSort}
          value={sort}
          className='py-1 px-3 capitalize border hover:shadow-xl cursor-pointer border-gray-400 rounded-2xl'>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (A-Z)</option>
          <option value='name-z'>name (Z-A)</option>
        </select>
      </form>
    </div>
  );
}
