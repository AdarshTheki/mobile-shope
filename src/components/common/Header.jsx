import React from 'react';
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import GlobalContext from '../../context/useGlobalContext';
import Logo from '../SVG/Logo';
import useCartContext from '../../context/useCartContext';
import { logoutAccount } from '../../appwrite/authService';

export default function Header() {
  const { cartItems, auth, logout } = GlobalContext();
  const { total_items } = useCartContext();
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
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 duration-300 hover:underline me-4 md:me-6'
              : ' text-slate-800 duration-300 hover:text-blue-600 hover:underline me-4 md:me-6'
          }>
          {children}
        </NavLink>
      </li>
    );
  };

  return (
    <div className='w-full px-14 h-14 shadow flex flex-wrap items-center justify-between capitalize'>
      <Logo />
      <ul className='hidden md:flex capitalize flex-wrap items-center mb-6 text-sm font-medium sm:mb-0'>
        <PageLink to={'/'}>Home</PageLink>
        <PageLink to={'/products'}>products</PageLink>
        <PageLink to={'/order-payment'}>payment</PageLink>
        <PageLink to={'/shopping-cart'}>
          ShoppingCart {total_items !== 0 && <span className='text-blue-600'>({total_items})</span>}
        </PageLink>
      </ul>
      {status ? (
        <ul className='flex text-sm items-center font-medium'>
          <PageLink to={'/profile'} title='User Name'>
            Hey, {userData?.name || userData?.email}
          </PageLink>
          <button
            onClick={() => logOutHandler()}
            className='hover:opacity-80 font-medium duration-300 px-4 py-2 text-white bg-blue-600 rounded text-sm'>
            Logout
          </button>
        </ul>
      ) : (
        <div className='space-x-4'>
          <NavLink
            to={'/register'}
            className='hover:opacity-80 duration-300 px-4 py-2 text-white bg-blue-600 border-blue-600 border rounded text-sm'>
            Register
          </NavLink>
          <NavLink
            to={'/login'}
            className='hover:opacity-80 duration-300 px-4 py-2 text-white bg-slate-700 border-white border rounded text-sm'>
            Login →
          </NavLink>
        </div>
      )}
      <Toaster />
    </div>
  );
}
