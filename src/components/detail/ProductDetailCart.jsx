import React from 'react';
import { formatePrice } from '../../utils/helpers';
import Starts from '../../utils/Starts';

export default function ProductDetailCart({ products }) {
  const {
    id,
    name,
    url,
    stars,
    ratings,
    reviews,
    ram,
    rom,
    display,
    camera,
    battery,
    price,
    shipping,
    category,
  } = products;

  return (
    <div className='sm:flex px-5 gap-5 justify-evenly mx-auto'>
      <div className=''>
        <img src={url} alt={id} className='max-w-xl object-contain' />
      </div>
      <div className='space-y-4 max-w-md'>
        <h2 className='text-xl font-medium text-blue-700'>{name}</h2>
        <ul className='list-disc list-inside space-y-1'>
          <Starts starts={stars} reviews={reviews} ratings={ratings} />
          <li>{`${ram} GB RAM | ${rom} GB ROM storage`}</li>
          <li>{`${display} Full HD+ Display`}</li>
          <li>{`${camera} MP Rear Camera`}</li>
          <li>{`${battery} mAh Battery`} </li>
          <li>
            Handset, Protective Case, Quick Start Guide, charger 22 W, Warranty Card Box Accessories
          </li>
        </ul>
        <div className='md:flex gap-2 capitalize text-gray-800'>
          <p>
            SKU: <b>{`${id}ROM${rom}`}</b>
          </p>
          <p>
            Brand: <b>{category}</b>
          </p>
          <p>
            Delivery:{' '}
            <span
              className={`px-2 py-1 rounded font-medium text-xs ${
                shipping ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'
              }`}>
              {shipping ? 'Free' : 'Paid'}
            </span>
          </p>
          <p>
            Stock:
            <span className='text-red-700 bg-red-200 p-1 py-0 rounded-full font-medium text-xs'>
              {Math.floor(stars)}
            </span>
          </p>
        </div>
        <h2 className='text-2xl font-medium'>{`Price: ${formatePrice(price)}/-`}</h2>
        <button className='py-2 rounded-3xl text-white bg-blue-600 text-sm font-semibold px-14'>
          Add to Cart
        </button>
      </div>

    </div>
  );
}
