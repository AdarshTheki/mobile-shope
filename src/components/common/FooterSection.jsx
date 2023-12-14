// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoYoutube } from 'react-icons/io5';
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcAmazonPay } from 'react-icons/fa';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className=' bg-slate-800 text-slate-300 text-sm'>
      <div className=' container mx-auto px-5'>
        <div className='flex flex-col md:flex-row justify-between pt-14 pb-8'>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Categories</h3>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Apple
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Infinix
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Motorola
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              OnePlus
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Poco
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Samsung
            </Link>
            <Link to='/' className='hover:text-blue-600 duration-300'>
              Vivo
            </Link>
          </div>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Useful Links</h3>
            <Link to={'/'} className='hover:text-blue-600 duration-300'>
              Home
            </Link>
            <Link to={'/profile'} className='hover:text-blue-600 duration-300'>
              My Account
            </Link>
            <Link to={'/shopping-cart'} className='hover:text-blue-600 duration-300'>
              My Cart
            </Link>
            <Link to={'/order-payment'} className='hover:text-blue-600 duration-300'>
              Order payment
            </Link>
            <Link to={'/track-order'} className='hover:text-blue-600 duration-300'>
              Track order
            </Link>
            <Link to={'/contact'} className='hover:text-blue-600 duration-300'>
              contact
            </Link>
            <Link to={'/products'} className='hover:text-blue-600 duration-300'>
              Shop
            </Link>
          </div>
          <div className='flex flex-col capitalize'>
            <h3 className='text-lg text-white mb-2'>Customer service</h3>
            <p className='text-slate-300 w-52'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit necessitatibus iste
              ullam esse consectetur, excepturi unde tempora,
            </p>
          </div>
          <div className='flex flex-col gap-2 capitalize'>
            <div>
              <h2 className='text-lg '>Headquarters</h2>
              <p>Highway Road Ramdaspeth Nagpur - 440010</p>
            </div>
            <div>
              <h2 className='text-lg'>Email</h2>
              <p className='lowercase'>adarshverma549@gmail.com</p>
            </div>
            <div>
              <h2 className='text-lg '>Telephone</h2>
              <p>+91 7719971779</p>
            </div>
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
          </div>
        </div>
      </div>
      <div className='pb-4 flex items-center justify-evenly'>
        <h2>
          @{date}
          <span className='text-white font-medium'> Adarsh Verma E-shop</span>. All right resowed
        </h2>
        <div className='flex gap-3'>
          <FaCcVisa className='text-2xl' />
          <FaCcPaypal className='text-2xl' />
          <FaCcMastercard className='text-2xl' />
          <FaCcAmazonPay className='text-2xl' />
        </div>
      </div>
    </div>
  );
}
