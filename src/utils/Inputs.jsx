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
          className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-m text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`}
        />
      </label>
    </div>
  );
});

export default Inputs;
