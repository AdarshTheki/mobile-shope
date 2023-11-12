import React from 'react';
import ProductFilter from '../components/Product/ProductFilter';
import ProductList from '../components/Product/ProductList';

export default function Products() {
  return (
    <div className='w-full relative flex justify-between'>
      <ProductFilter />
      <ProductList />
    </div>
  );
}
