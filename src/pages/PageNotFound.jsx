import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {

  return (
    <div className='flex flex-col justify-center items-center' style={{ minHeight: '80vh' }}>
      <h1 className=' font-medium text-gray-800 text-8xl'>404</h1>
      <h1 className=''>Pge Not Found</h1>
      <p className='fw-medium'>The resource requested could not be found on this server!</p>
      <NavLink className={'my-5 text-blue-600 font-semibold'} to={'/'}>Home</NavLink>
    </div>
  );
}
