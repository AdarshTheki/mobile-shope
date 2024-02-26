import React from 'react';
import carts from '../../assets/carts.webp';
import { NavLink } from 'react-router-dom';

export default function CartMissing() {
    return (
        <div className='w-full text-center flex flex-col gap-2 items-center'>
            <img src={carts} alt='carts' className='object-contain block mx-auto w-[300px]' />
            <h1 className='text-base'>Missing Cart items?</h1>
            <NavLink
                to='/products'
                className='bg-blue-600 text-sm text-white px-6 py-2 hover:opacity-80 rounded capitalize'>
                products search
            </NavLink>
        </div>
    );
}
