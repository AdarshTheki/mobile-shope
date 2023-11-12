import React from 'react';

export default function Button({ children, className = '' }) {
  return (
    <button className={`py-2 w-full capitalize rounded-md cursor-pointer block font-semibold ${className}`}>
      {children}
    </button>
  );
}
