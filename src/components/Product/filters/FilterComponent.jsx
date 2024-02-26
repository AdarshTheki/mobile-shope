import React, { useId, useMemo, useState } from 'react';
import { useFilter } from '../../../context';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
export default function FilterComponent({ name, label, items }) {
    const { all_products, toggleCheckbox, filters } = useFilter();

    const [showCheckbox, setShowCheckbox] = useState(false);

    const CheckBoxes = ({ value }) => {
        const names = name?.toLowerCase();
        const Id = useId();
        const totalItems = useMemo(
            () => all_products.filter((i) => i[names] === value),
            [value, names]
        );
        return (
            <label
                htmlFor={Id}
                key={value}
                className='flex gap-1.5 items-center flex-wrap cursor-pointer hover:text-blue-500 duration-200'>
                <input
                    type='checkbox'
                    id={Id}
                    checked={filters[`selected${name}`]?.includes(value)}
                    onChange={() => toggleCheckbox(name, value)}
                />
                <span className='capitalize'>{value.toString().slice(0, 8)}</span>
                <span>{label}</span>
                <span className='text-gray-400 text-sm'>({totalItems?.length})</span>
            </label>
        );
    };
    return (
        <div>
            <div
                className='text-gray-800 text-sm uppercase font-normal cursor-pointer flex justify-between px-4'
                onClick={() => setShowCheckbox(!showCheckbox)}>
                {name}
                {!showCheckbox ? (
                    <MdKeyboardArrowDown fontSize={20} />
                ) : (
                    <MdKeyboardArrowUp fontSize={20} />
                )}
            </div>
            <ClearAllButton name={name} label={label} />

            {/* Display Checkboxes */}
            {showCheckbox && (
                <div className='pl-4 text-gray-600'>
                    {items?.map((item) => (
                        <CheckBoxes key={item} value={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

const ClearAllButton = ({ name, label }) => {
    const {
        filters,
        clearCategory,
        clearCamera,
        toggleCheckbox,
        clearDisplay,
        clearRam,
        clearBattery,
    } = useFilter();

    const allCheckboxClear = async () => {
        if (name === 'Category') {
            await clearCategory();
        }
        if (name === 'Battery') {
            await clearBattery();
        }
        if (name === 'Ram') {
            await clearRam();
        }
        if (name === 'Display') {
            await clearDisplay();
        }
        if (name === 'Camera') {
            await clearCamera();
        }
    };

    const customClass =
        'bg-red-200 text-red-600 hover:bg-red-300 duration-300 text-xs py-1 px-2 font-medium rounded-lg';

    return (
        <div className='flex flex-wrap gap-2 justify-start pb-1'>
            {/* Remove all Filter Buttons */}
            {filters[`selected${name}`]?.length !== 0 && (
                <button onClick={allCheckboxClear} className={customClass}>
                    Clear All
                </button>
            )}
            {/* Remove Filter Buttons */}
            {filters[`selected${name}`]?.map((arr) => (
                <button key={arr} onClick={() => toggleCheckbox(name, arr)} className={customClass}>
                    {arr.toString().slice(0, 8)} {label} ×
                </button>
            ))}
        </div>
    );
};
