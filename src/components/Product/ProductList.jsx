import React from 'react';
import ProductItem from './ProductItem';
import GlobalContext from '../../context/GlobalContext';

export default function ProductList() {
  const { filterProducts } = GlobalContext();
  return (
    <div className='max-h-screen w-10/12 overflow-y-auto overflow-x-hidden py-5'>
      <h2
        className={`text-xl font-semibold text-center uppercase border-b-2 border-gray-300 ${
          filterProducts.length > 10 ? 'text-pink-500' : 'text-red-500'
        } `}>
        Product availability: {filterProducts.length}
      </h2>
      <div className='pt-5'>
        {filterProducts?.slice(0, 20)?.map((product) => (
          <ProductItem key={product?.id} products={product} />
        ))}
      </div>
    </div>
  );
}
