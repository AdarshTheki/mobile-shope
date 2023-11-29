import React from 'react';
import ProductItem from './ProductItem';
import Items from './Items';
import { useFilter } from '../../context/Filter_Context';
import ProductSort from './ProductSort';

export default function ProductList() {
  const { filtered_products, grid_view } = useFilter();

  return (
    <div className='max-h-[150vh] min-h-[150vh] border-l-2 w-full overflow-y-auto relative'>
      <ProductSort />
      <hr className=' border-gray-300 mb-4' />
      {grid_view ? (
        <div className='flex flex-wrap'>
          {filtered_products?.slice(0, 20)?.map((product) => {
            return <Items key={product?.id} product={product} />;
          })}
        </div>
      ) : (
        <div>
          {filtered_products?.slice(0, 20)?.map((product) => {
            return <ProductItem key={product?.id} products={product} />;
          })}
        </div>
      )}
    </div>
  );
}
