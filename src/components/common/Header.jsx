import React from 'react';
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import GlobalContext from '../../context/GlobalContext';
import { logoutAccount } from '../../appwrite/authService';

export default function Header() {
  const { cartItems, auth, logout } = GlobalContext();
  const { status, userData } = auth;

  const logOutHandler = async () => {
    try {
      await logoutAccount();
      await logout();
      toast.success('Logout successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const PageLink = ({ children, to }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-red-400 px-2 py-1' : 'text-gray-200')}>
        {children}
      </NavLink>
    );
  };

  return (
    <div className='w-full px-14 h-14 shadow flex flex-wrap items-center justify-between bg-slate-900 capitalize'>
      <div className='w-1/2 flex items-center justify-evenly font-medium'>
        <PageLink to={'/'}>Home</PageLink>
        <PageLink to={'/products'}>products</PageLink>
        <PageLink to={'/wishlist'}>wishlist</PageLink>
        <PageLink to={'/shopping-cart'}>
          ShoppingCart{' '}
          {cartItems.length !== 0 && <span className='text-red-400'>({cartItems.length})</span>}
        </PageLink>
      </div>
      {status ? (
        <div className='space-x-2'>
          <NavLink to={'/profile'} title='User Name' className='text-white capitalize'>Hey, {userData?.name || userData?.email}</NavLink>
          <button
            onClick={logOutHandler}
            className='px-3 py-1 font-semibold hover:bg-red-700 hover:text-gray-200 duration-300 text-red-600 border-red-600 border text-sm'>
            Logout
          </button>
        </div>
      ) : (
        <div className='space-x-4'>
          <NavLink
            to={'/register'}
            className='hover:opacity-80 px-4 py-2 text-white bg-blue-700 border-blue-600 border text-sm'>
            Register
          </NavLink>
          <NavLink
            to={'/login'}
            className='hover:opacity-80 px-4 py-2 text-white bg-gray-700 border-white border text-sm'>
            Login →
          </NavLink>
        </div>
      )}
      <Toaster />
    </div>
  );
}
