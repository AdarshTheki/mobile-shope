import React from 'react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function SocialIcons() {
  return (
    <section className='flex gap-2'>
      <Link to='/'>
        <IoLogoFacebook className='text-lg text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoTwitter className='text-lg text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoGithub className='text-lg text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoYoutube className='text-lg text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoInstagram className='text-lg text-gray-900 hover:text-blue-600' />
      </Link>
    </section>
  );
}
