import React, { forwardRef, useId } from 'react';

const Inputs = forwardRef(function InputFrom(
  { label, type = 'text', className = '', ...props },
  ref
) {
  const uniqueId = useId();

  return (
    <div className='block'>
      <label htmlFor={uniqueId}>
        <span className='block text-sm font-medium text-slate-700'>{label}</span>
        <input
          autoComplete='off'
          id={uniqueId}
          type={type}
          {...props}
          ref={ref}
          className={`w-full py-1.5 text-sm rounded border border-gray-600 px-5 ${className}`}
        />
      </label>
    </div>
  );
});

export default Inputs;
