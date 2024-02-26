import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { getUniqueValues } from '../../../utils';
import { useFilter } from '../../../context';

export default function FilterColors() {
    const { updateFilters, all_products, filters } = useFilter();
    const colors = getUniqueValues(all_products, 'color');

    return (
        <div className='pl-4'>
            <h2 className='text-gray-800 text-sm uppercase font-normal'>colors</h2>
            <div className='flex flex-wrap gap-2 mt-2'>
                {colors.map((c, index) => {
                    if (c === 'all') {
                        return (
                            <button
                                key={c}
                                type='submit'
                                name='color'
                                data-color='all'
                                onClick={updateFilters}>
                                All
                            </button>
                        );
                    }
                    return (
                        <button
                            key={index}
                            title={c}
                            name='color'
                            style={{ backgroundColor: c }}
                            className={`w-5 h-5 rounded border border-gray-400 hover:border-blue-500 relative ${
                                filters.color === c && 'text-white'
                            }`}
                            data-color={c}
                            onClick={updateFilters}>
                            {filters.color === c && (
                                <FaCheck fontSize={12} className=' absolute left-1 top-1' />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
