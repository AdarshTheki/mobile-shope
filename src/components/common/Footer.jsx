// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../SVG/Logo';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoYoutube } from 'react-icons/io5';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className=' bg-slate-800 text-slate-300 text-sm mt-16'>
      <div className=' container mx-auto px-5'>
        <div className='flex flex-col md:flex-row justify-between pt-14 pb-8'>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>shope categories</h3>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>Phones</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>laptops</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>desktop</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>watches</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>Tvs</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>accessories</Link>
          </div>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Customer service</h3>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>Contact us</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>shopping police</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>return & exchange</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>vouchers</Link>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>FAQs</Link>
          </div>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Customer service</h3>
            <p className='text-slate-300 w-52'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit necessitatibus iste
              ullam esse consectetur, excepturi unde tempora,
            </p>
          </div>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Follow us</h3>
            <ul className='flex gap-2'>
              <Link to='/'>
                <IoLogoFacebook className='text-2xl' />
              </Link>
              <Link to='/'>
                <IoLogoTwitter className='text-2xl' />
              </Link>
              <Link to='/'>
                <IoLogoGithub className='text-2xl' />
              </Link>
              <Link to='/'>
                <IoLogoYoutube className='text-2xl' />
              </Link>
            </ul>
            <div className='sm:scale-125 mt-5 sm:mt-16'>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <p className='text-white text-center pb-2'>@{date} E-shop. Adarsh Verma All right resowed</p>
    </div>
  );
}
