import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilter } from '../../../context';
import { FaSearch } from 'react-icons/fa';

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
    const { text } = filters;

    return (
        <div className='text-sm py-4 mb-2 mx-2 capitalize sm:flex gap-4 items-center justify-between sm:px-5 bg-white'>
            {/* Product Lists Row or Column */}
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
            {/* Products Search */}
            <form className='flex-grow'>
                <div className='relative w-full'>
                    <input
                        onChange={updateFilters}
                        name='text'
                        value={text}
                        type='search'
                        id='search-dropdown'
                        className='block py-1.5 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
                        placeholder='Name, brand & more...'
                        required
                    />
                    <button
                        type='submit'
                        className='absolute h-full top-0 end-0 px-5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        <FaSearch />
                        <span className='sr-only'>Search</span>
                    </button>
                </div>
            </form>
            {/* Products Sort */}
            <form className='flex gap-2'>
                <select
                    name='sort'
                    onChange={updateSort}
                    value={sort}
                    className='py-1 pl-2 capitalize border hover:shadow-xl text-sm cursor-pointer border-gray-400 rounded-2xl'>
                    <option value='id'>default</option>
                    <option value='ratings'>most popular</option>
                    <option value='price-lowest'>low to high</option>
                    <option value='price-highest'>high to low</option>
                    <option value='name-a'>name (A-Z)</option>
                    <option value='name-z'>name (Z-A)</option>
                    <option value='reviews'>most reviews</option>
                </select>
                <select
                    name='page'
                    value={filters.page}
                    onChange={updateFilters}
                    className='py-1 pl-2 capitalize border hover:shadow-xl text-sm cursor-pointer border-gray-400 rounded-2xl'>
                    <option value={10}>10 products</option>
                    <option value={20}>20 products</option>
                    <option value={50}>50 products</option>
                    <option value={100}>100 products</option>
                    <option value={150}>150 products</option>
                </select>
            </form>
        </div>
    );
}
