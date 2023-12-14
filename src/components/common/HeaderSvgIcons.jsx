// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';
import { FiShoppingBag } from 'react-icons/fi';

import { useCart } from '../../context';

export default function HeaderSvgIcons() {
  const { total_items } = useCart();
  return (
    <ul className='flex capitalize flex-wrap gap-10 items-center mb-6 sm:mb-0'>
      <Link
        to='/'
        data-tooltip-id='IoHome'
        data-tooltip-content='Home'
        className='hover:text-blue-600 duration-300'>
        <IoHome fontSize={25} />
        <Tooltip id='IoHome' place='top' style={{ fontSize: 12 }} />
      </Link>
      <Link
        to='/products'
        data-tooltip-id='FiShoppingBag'
        data-tooltip-content='products'
        className='hover:text-blue-600 duration-300'>
        <FiShoppingBag fontSize={25} />
        <Tooltip id='FiShoppingBag' place='top' style={{ fontSize: 12 }} />
      </Link>
      <Link
        to='/shopping-cart'
        className='relative hover:text-blue-600 duration-300'
        data-tooltip-id='Cart'
        data-tooltip-content='shopping cart'>
        <FaShoppingCart fontSize={25} />
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
        <FaWallet fontSize={25} />
        <Tooltip id='wallet' place='top' style={{ fontSize: 12 }} />
      </Link>
    </ul>
  );
}
