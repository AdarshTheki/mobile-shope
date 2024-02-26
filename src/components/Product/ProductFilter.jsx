import React from 'react';

import { useFilter } from '../../context';
import { formatePrice, getUnique, Button } from '../../utils';
import FilterColors from './filters/FilterColors';
import FilterRatings from './filters/FilterRatings';
import FilterComponent from './filters/FilterComponent';

export default function ProductFilter() {
    const { filters, updateFilters, clearFilters, all_products } = useFilter();
    const { min_price, price, max_price, shipping } = filters;

    const batteries = getUnique(all_products, 'battery');
    const categories = getUnique(all_products, 'category');
    const camera = getUnique(all_products, 'camera');
    const display = getUnique(all_products, 'display');
    const ram = getUnique(all_products, 'ram');

    return (
        <div className='overflow-y-auto lg:w-[250px] sm:w-[200px]'>
            <ul className='list-none text-sm'>
                <li className='border-b pl-4 py-4 text-lg text-gray-800 uppercase font-normal'>
                    Filters
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterComponent items={categories} name={'Category'} label={''} />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterComponent items={batteries} name={'Battery'} label={'mAh'} />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterComponent items={ram} name={'Ram'} label={'GB'} />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterComponent items={display} name={'Display'} label={''} />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterComponent items={camera} name={'Camera'} label={'Rear MP'} />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterRatings />
                </li>
                <li className='border-b p-1 py-2'>
                    <FilterColors />
                </li>
                <li className='border-b p-1 py-2'>
                    <div className='pl-4'>
                        {/* price */}
                        <label
                            htmlFor='priceRange'
                            className='text-gray-800 text-sm uppercase font-normal'>
                            Price: <span className='text-xs'>{formatePrice(price)}</span>
                        </label>
                        <input
                            type='range'
                            name='price'
                            id='priceRange'
                            min={min_price}
                            max={max_price}
                            step={(min_price + max_price) / 10}
                            value={price}
                            onChange={updateFilters}
                        />
                    </div>
                </li>
                <li className='border-b p-1 py-2'>
                    {/* shipping */}
                    <div className='pl-4 capitalize space-x-2'>
                        <label
                            htmlFor='shipping'
                            className='text-gray-800 text-sm uppercase font-normal'>
                            free shipping:
                        </label>
                        <input
                            type='checkbox'
                            name='shipping'
                            id='shipping'
                            checked={shipping}
                            onChange={updateFilters}
                        />
                    </div>
                </li>
            </ul>
            {/* Clear all filters */}
            <Button
                className='mx-auto block my-2 text-sm bg-red-500 text-white active:bg-red-700 hover:bg-red-600'
                onClick={() => clearFilters()}>
                clear all
            </Button>
        </div>
    );
}
