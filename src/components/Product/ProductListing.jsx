import React from 'react';
import ProductColumn from './ProductColumn';
import ProductRow from './ProductRow';
import { useFilter } from '../../context';
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
            return <ProductRow key={product?.id} product={product} />;
          })}
        </div>
      ) : (
        <div>
          {filtered_products?.slice(0, page)?.map((product) => {
            return <ProductColumn key={product?.id} products={product} />;
          })}
        </div>
      )}
    </div>
  );
}
