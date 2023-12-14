import React, { useId, useMemo } from 'react';
import { useFilter } from '../../../context';

// eslint-disable-next-line react/prop-types
export default function FilterComponent({ name, label, items }) {
  const { all_products, toggleCheckbox, filters } = useFilter();

  const RemoveFilterButtons = ({ arr }) => {
    return (
      <button
        key={arr}
        onClick={() => toggleCheckbox(name, arr)}
        className='bg-red-200 text-red-600 hover:bg-red-300 duration-300 text-xs py-1 px-2 font-medium rounded-lg'>
        {arr.toString().slice(0, 8)} {label} ×
      </button>
    );
  };

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
        <span className=' capitalize'>{value.toString().slice(0, 8)}</span>
        <span className='normal-case'>{label}</span>
        <span className='text-gray-400 text-sm'>({totalItems?.length})</span>
      </label>
    );
  };

  const ClearAllButton = ({ name }) => {
    const { filters, clearCategory, clearCamera, clearDisplay, clearRam, clearBattery } =
      useFilter();

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
    return (
      <div className='flex justify-between pb-1'>
        <h2 className='text-gray-600 font-medium uppercase'>{name}</h2>
        {filters[`selected${name}`]?.length !== 0 && (
          <button onClick={allCheckboxClear} className='text-xs mr-3 font-medium text-red-500'>
            Clear All
          </button>
        )}
      </div>
    );
  };

  return (
    <div className='bg-white pl-4 rounded-lg py-2 text-gray-700 text-sm'>
      {/* Remove all Filter Buttons */}
      <ClearAllButton name={name} />

      {/* Remove Filter Buttons */}
      <div className=' flex flex-wrap gap-2'>
        {filters[`selected${name}`]?.map((i) => (
          <RemoveFilterButtons key={i} arr={i} />
        ))}
      </div>

      {/* Display Checkboxes */}
      <div>
        {items.map((item) => (
          <CheckBoxes key={item} value={item} />
        ))}
      </div>
    </div>
  );
}
