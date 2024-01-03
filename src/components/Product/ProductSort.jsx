import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilter } from '../../context';
import FilterSearchBar from './FilterSearchBar';

export default function ProductSort() {
    const {
        filtered_products,
        updateSort,
        sort,
        filters,
        updateFilters,
        grid_view,
        setGridView,
        setListView,
    } = useFilter();
    return (
        <div className='text-sm m-2 capitalize sm:flex space-y-4 py-2 gap-4 items-center justify-between sm:px-10 bg-white rounded-lg'>
            <div className='flex gap-2 items-center'>
                <button
                    onClick={setGridView}
                    className={`border p-1 rounded border-gray-800 ${
                        grid_view ? 'text-white bg-gray-800' : null
                    }`}>
                    <BsFillGridFill fontSize={15} />
                </button>
                <button
                    onClick={setListView}
                    className={`border p-1 rounded border-gray-800 ${
                        !grid_view ? 'text-white bg-gray-800' : null
                    }`}>
                    <BsList fontSize={15} />
                </button>
                <h2>{filtered_products?.length} products Found</h2>
            </div>
            <FilterSearchBar />
            <form className='flex gap-2'>
                <select
                    name='sort'
                    onChange={updateSort}
                    value={sort}
                    className='py-1 pl-2 capitalize border hover:shadow-xl cursor-pointer border-gray-400 rounded-2xl'>
                    <option value='id'>default sorting</option>
                    <option value='ratings'>most popular</option>
                    <option value='price-lowest'>price: low to high</option>
                    <option value='price-highest'>price: high to low</option>
                    <option value='name-a'>product: name (A-Z)</option>
                    <option value='name-z'>product: name (Z-A)</option>
                    <option value='reviews'>most reviews</option>
                </select>
                <select
                    name='page'
                    value={filters.page}
                    onChange={updateFilters}
                    className='py-1 pl-2 capitalize border hover:shadow-xl cursor-pointer border-gray-400 rounded-2xl'>
                    <option value={10}>10 products/page</option>
                    <option value={20}>20 products/page</option>
                    <option value={50}>50 products/page</option>
                    <option value={100}>100 products/page</option>
                    <option value={150}>150 products/page</option>
                </select>
            </form>
        </div>
    );
}
