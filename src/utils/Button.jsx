import React from 'react';

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-4 rounded-md p-2 cursor-pointer hover:opacity-80 duration-300 ${className} text-white`}>
      {children}
    </button>
  );
}
