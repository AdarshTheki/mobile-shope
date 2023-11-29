import React from 'react';

export default function Skeleton() {
  return (
    <div>
      <div role='status' className='max-w-sm animate-pulse my-10'>
        <div className='h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
