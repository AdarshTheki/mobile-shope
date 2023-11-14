import React, { forwardRef, useId } from 'react';

const Inputs = forwardRef(function InputFrom(
  { label, type = 'text', className = '', ...props },
  ref
) {
  const uniqueId = useId();
  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={uniqueId} className='block cursor-pointer text-sm font-medium leading-6 text-gray-900'>
          {label}
        </label>
      )}
      <input
        id={uniqueId}
        type={type}
        {...props}
        ref={ref}
        className={`block w-full rounded-md border p-2 my-2 border-gray-300 shadow-sm focus:outline-blue-800 sm:text-sm ${className}`}
      />
    </div>
  );
});

export default Inputs;
