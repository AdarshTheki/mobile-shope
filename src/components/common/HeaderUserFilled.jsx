// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/Cart_Context';
import { FaHeart, FaShoppingCart, FaUser, FaWallet } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

export default function HeaderUserFilled() {
  const { total_items } = useCart();
  return (
    <ul className='flex capitalize flex-wrap gap-10 items-center mb-6 sm:mb-0 '>
      <Link
        to='profile'
        data-tooltip-id='FaUser'
        data-tooltip-content='User Profile'
        className='hover:text-blue-600 duration-300'>
        <FaUser />
        <Tooltip id='FaUser' place='top' style={{ fontSize: 12 }} />
      </Link>
      <Link
        data-tooltip-id='FaHeart'
        data-tooltip-content='wishlist'
        className='hover:text-blue-600 duration-300'>
        <FaHeart />
        <Tooltip id='FaHeart' place='top' style={{ fontSize: 12 }} />
      </Link>
      <Link
        to='/shopping-cart'
        className='relative hover:text-blue-600 duration-300'
        data-tooltip-id='Cart'
        data-tooltip-content='shopping cart'>
        <FaShoppingCart />
        {total_items !== 0 && (
          <span className='bg-red-500 text-white text-xs font-bold px-1.5 scale-75 py-0.5 rounded-full absolute left-3 bottom-1'>
            {total_items}
          </span>
        )}
        <Tooltip id='Cart' place='top' style={{ fontSize: 12 }} />
      </Link>
      <Link
        to='/order-payment'
        className='hover:text-blue-600 duration-300'
        data-tooltip-id='wallet'
        data-tooltip-content='payment'>
        <FaWallet />
        <Tooltip id='wallet' place='top' style={{ fontSize: 12 }} />
      </Link>
    </ul>
  );
}
