import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../context/Filter_Context';
import Items from '../Product/Items';
import { getUniqueValues } from '../../utils/helpers';

export default function CategoryItem() {
  const { all_products } = useFilter();
  const navigates = useNavigate();
  const categories = getUniqueValues(all_products, 'category');
  return (
    <div className='container mx-auto'>
      {categories.map((category) => {
        const categoryItems = all_products.filter(
          (product) => product?.category === category !== 'all'
        );
        return (
          <div key={category}>
            <div className='flex mx-10 items-center justify-between'>
              {category && (
                <>
                  <h2 className='my-2 text-slate-600 uppercase text-2xl font-semibold'>
                    {category}
                  </h2>
                  <p
                    onClick={() => navigates('/products')}
                    className='text-blue-600 font-medium cursor-pointer hover:underline'>
                    Browse All →
                  </p>
                </>
              )}
            </div>
            <div className='flex justify-center items-center flex-wrap'>
              {categoryItems?.slice(0, 6)?.map((product) => {
                return <Items product={product} key={product?.id} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
