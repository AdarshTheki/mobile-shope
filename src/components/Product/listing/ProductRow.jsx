/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Stars, formatePrice } from '../../../utils';
import { NavLink } from 'react-router-dom';

export default function Items({ product }) {
    return (
        <NavLink
            to={`/product/${product?.id}`}
            // className='flex-grow min-w-[200px] bg-white grid items-center justify-center lg:w-1/5 sm:1/4 shadow hover:shadow-xl hover:scale-95 duration-500 text-center text-gray-800 border border-gray-300 rounded-2xl px-4 py-2 m-1'>
            className='bg-white rounded-xl px-4 py-2 hover:bg-blue-100 hover:border-blue-600 min-w-[200px] hover:border border border-transparent duration-300 text-center'>
            <p className='text-left text-xs capitalize'>{product?.category}</p>
            <h1 className='font-medium text-sm text-blue-600'>{product?.name}</h1>
            <img
                src={product?.url}
                alt={product?.name}
                className='mx-auto w-24 max-h-40 object-contain'
            />
            <Stars
                starts={product?.stars}
                ratings={product?.ratings}
                reviews={product?.reviews}
                className='justify-center'
            />
            <p className='text-gray-800'>Price: {formatePrice(product.price)}/-</p>
        </NavLink>
    );
}
