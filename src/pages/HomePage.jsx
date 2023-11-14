import React from 'react';
import { useNavigate } from 'react-router-dom';

import useProductContext from '../context/useProductContext';
import Items from '../components/Product/Items';
import Button from '../utils/Button';

export default function HomePage() {
  const { allProducts } = useProductContext();
  const navigates = useNavigate();
  const categories = [
    'Apple',
    'Google',
    'Infinix',
    'Motorola',
    'Oneplus',
    'Oppo',
    'Poco',
    'Realme',
    'Redmi',
    'Samsung',
    'Vivo',
  ];

  return (
    <>
      <div className='py-20 bg-gray-800 flex flex-col text-center items-center gap-5'>
        <h1 className='text-5xl text-white font-semibold'>Discover the Latest Fashion Trends</h1>
        <p className='text-xl text-gray-400'>
          Explore our collection of stylish mobiles and accessories to stay in vogue.
        </p>
        <div className='sm:flex'>
          <Button onClick={() => navigates('/products')} className='bg-blue-700 mx-2'>
            Shop now →
          </Button>
          <Button onClick={() => navigates('/contact')} className='bg-gray-700 border mx-2'>
            Contact us
          </Button>
        </div>
      </div>
      {/* Category */}
      {/* Product Section */}
      {categories.map((category) => {
        const categoryItems = allProducts.filter(
          (product) => product?.category === category?.toLowerCase()
        );
        return (
          <div className='' key={category}>
            {category && (
              <div className='flex mx-10 items-center justify-between'>
                <h2 className='my-2 text-pink-500 uppercase text-2xl font-semibold'>{category}</h2>
                <p
                  onClick={() => navigates('/products')}
                  className='text-pink-500 font-medium cursor-pointer hover:text-pink-800'>
                  Browse all →
                </p>
              </div>
            )}
            <div className='flex gap-4 py-2 justify-between overflow-x-scroll'>
              {categoryItems?.slice(0, 5)?.map((product) => {
                return <Items product={product} key={product?.id} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
