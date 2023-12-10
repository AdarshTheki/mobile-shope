import React from 'react';
import ProductCard from './ProductCard';
import Items from './Items';
import { useFilter } from '../../context/Filter_Context';
import ProductSort from './ProductSort';

export default function ProductList() {
  const { filtered_products, grid_view, filters } = useFilter();
  const { page } = filters;

  return (
    <div className='max-h-[200vh] min-h-[150vh] bg-gray-200 w-full overflow-y-auto relative scrollbar-thin scrollbar-thumb-slate-500 '>
      <div className=' sticky top-0 shadow shadow-white z-10'>
        <ProductSort />
      </div>
      {grid_view ? (
        <div className='flex flex-wrap'>
          {filtered_products?.slice(0, page)?.map((product) => {
            return <Items key={product?.id} product={product} />;
          })}
        </div>
      ) : (
        <div>
          {filtered_products?.slice(0, page)?.map((product) => {
            return <ProductCard key={product?.id} products={product} />;
          })}
        </div>
      )}
    </div>
  );
}
