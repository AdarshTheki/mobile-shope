import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useFilter } from '../../../context';

export default function FilterRatings() {
    const { filters, all_products, updateFilters } = useFilter();
    const { stars } = filters;

    const [showDropdown, setShowDropdown] = useState(false);

    const Stars = ({ star }) => {
        const tempStar = Array.from({ length: star }, (_, index) => {
            return (
                <span key={index}>
                    <BsStarFill />
                </span>
            );
        });
        return <span className='flex text-yellow-500 space-x-1 text-sm'>{tempStar}</span>;
    };

    const RadioInputs = ({ value }) => {
        let totalItems = all_products.filter((i) => Math.round(i.stars) === value);
        return (
            <div className='space-x-3 flex pl-4'>
                <input
                    type='radio'
                    name='stars'
                    checked={stars === value}
                    id={value}
                    value={value}
                    onChange={updateFilters}
                />
                <label htmlFor={value} className='flex cursor-pointer text-xs items-center gap-1'>
                    <Stars star={value} />{' '}
                    <span className='text-gray-400'>({totalItems.length})</span>
                </label>
            </div>
        );
    };

    return (
        <div>
            <div
                className='text-gray-800 text-sm uppercase font-normal cursor-pointer flex justify-between px-4'
                onClick={() => setShowDropdown(!showDropdown)}>
                Ratings
                {!showDropdown ? (
                    <MdKeyboardArrowDown fontSize={20} />
                ) : (
                    <MdKeyboardArrowUp fontSize={20} />
                )}
            </div>
            {showDropdown && (
                <>
                    <div className='space-x-3 flex pl-4 capitalize'>
                        <input
                            type='radio'
                            name='stars'
                            checked={stars === 0}
                            id='allStars'
                            value={0}
                            onChange={updateFilters}
                        />
                        <label
                            htmlFor='allStars'
                            className='flex cursor-pointer text-xs items-center gap-1'>
                            all
                        </label>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <RadioInputs key={i} value={i} />
                    ))}
                </>
            )}
        </div>
    );
}
