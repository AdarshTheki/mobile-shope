import React from 'react';
import { IoChevronDown } from 'react-icons/io5';

export default function Dropdown({ label, lists }) {
  const [isOpen, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <div className='inline-flex'>
      <div
        onClick={() => setOpen(!isOpen)}
        className='relative inline-flex text-center '>
        <div className=' w-full rounded-l-md px-2 capitalize hover:text-blue-600'>{selectedOption || 'currency'}</div>
        <div className='relative'>
          <button
            type='button'
            className='hover:text-gary-700 inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-200 px-2 text-gray-600 hover:bg-gray-300'>
            <IoChevronDown />
          </button>
        </div>
        {isOpen && (
          <div className='w-full absolute top-2 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-200 bg-white shadow-md'>
            {lists?.map((list) => (
              <button
                type='button'
                onClick={() => onOptionClicked(list)}
                key={list}
                className='w-full hover:bg-blue-500 hover:text-white border-b p-2 duration-300'>
                {list}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
