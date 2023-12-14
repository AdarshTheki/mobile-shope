// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Logo } from '../../utils';
import 'react-tooltip/dist/react-tooltip.css';
import TopHeaderSection from './TopHeaderSection';
import HeaderSvgIcons from './HeaderSvgIcons';

export default function Header() {
  return (
    <div className='sticky top-0 bg-white z-30 shadow-lg w-full'>
      <div className='bg-gray-800'>
        <TopHeaderSection />
      </div>
      <hr />
      <div className='container px-5 py-2 mx-auto flex gap-4 flex-wrap items-center justify-between capitalize'>
        <Logo />
        <HeaderSvgIcons />
      </div>
    </div>
  );
}
