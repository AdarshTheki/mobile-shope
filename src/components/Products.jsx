import React, { useState } from 'react';
import { Data } from '../mobileData';
import ProductList from './ProductList';

export default function Products() {
  const [products, setProducts] = useState(Data);

  const category = Data?.map((product) => product.phone_category);
  const uniqueCategories = ['all', ...new Set(category)];

  const updateData = (item) => {
    return setProducts(
      Data?.filter((product) => item === 'all' || product.phone_category === item)
    );
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center'>
        <div className='flex gap-2 items-center justify-center'>
          {uniqueCategories?.map((category) => (
            <button
              onClick={() => updateData(category)}
              key={category}
              className={`text-gray-800 border px-3 py-1 capitalize font-semibold rounded-lg shadow hover:text-white hover:bg-gray-800 bg-gray-100`}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <h2 className='text-center text-xl capitalize font-semibold text-gray-500'>
        products avaibles: {products.length}
      </h2>
      {products?.map((product) => (
        <ProductList key={product?.phone_id} products={product} />
      ))}
    </div>
  );
}
