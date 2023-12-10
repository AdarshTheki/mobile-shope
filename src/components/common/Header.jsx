// eslint-disable-next-line no-unused-vars
import React from 'react';

import Logo from '../SVG/Logo';
import 'react-tooltip/dist/react-tooltip.css';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderTopSection from './HeaderTopSection';
import HeaderUserFilled from './HeaderUserFilled';

export default function Header() {
  return (
    <div className='sticky top-0 bg-white z-30 shadow-lg w-full py-2'>
      <HeaderTopSection />
      <div className='container sm:px-10 px-5 pt-2 mx-auto flex gap-4 flex-wrap items-center justify-between capitalize'>
        <Logo />
        <HeaderSearchBar />
        <HeaderUserFilled />
      </div>
    </div>
  );
}
