import React from 'react';
import { NavLink } from 'react-router-dom';

import useProductContext from '../../context/useProductContext';

export default function Header() {
  const { cartItems } = useProductContext();

  const PageLink = ({ children, to }) => {
    return (
      <NavLink to={to} className={({ isActive }) => (isActive ? 'text-red-400' : 'text-gray-200')}>
        {children}
      </NavLink>
    );
  };

  return (
    <div className='w-full px-14 py-2 shadow flex flex-wrap items-center justify-between bg-slate-900 capitalize'>
      <div className='w-1/2 flex items-center justify-evenly font-medium'>
        <PageLink to={'/'}>Home</PageLink>
        <PageLink to={'/products'}>products</PageLink>
        <PageLink to={'/wishlist'}>wishlist</PageLink>
        <PageLink to={'/shopping-cart'}>
          ShoppingCart{' '}
          {cartItems.length !== 0 && <span className='text-red-400'>({cartItems.length})</span>}
        </PageLink>
      </div>
      <div>
        <button className='px-3 py-2 text-sm font-medium capitalize rounded cursor-pointer bg-gray-700 text-white hover:bg-gray-600 mx-2'>
          Sign In
        </button>
        <button className='px-3 py-2 text-sm font-medium capitalize rounded cursor-pointer bg-gray-700 text-white hover:bg-gray-600 mx-2'>
          create an account
        </button>
      </div>
    </div>
  );
}
