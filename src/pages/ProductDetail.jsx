import React from 'react';
import { useLocation } from 'react-router-dom';

import GlobalContext from '../context/GlobalContext';
import ProductItem from '../components/Product/ProductItem';
import ChooseVariant from '../components/product-detail/ChooseVariant';
import Items from '../components/Product/Items';

export default function ProductDetailPage() {
  const { allProducts } = GlobalContext();
  const { pathname } = useLocation();
  const path = pathname.replace('/product/', '');
  const items = allProducts?.filter((product) => product.id == path);
  const categories = allProducts?.filter((product) => product.category == items[0]?.category);

  return (
    <div className='py-10'>
      <ProductItem products={items[0]} />
      <ChooseVariant items={items[0]} />
      <hr className='my-3 border-gray-300' />
      <h4 className='m-2 capitalize'>“{items[0]?.category}” Related products</h4>
      <div className='flex gap-4 py-2 justify-between overflow-x-scroll'>
        {categories?.map((category) => (
          <Items key={category?.id} product={category} />
        ))}
      </div>
    </div>
  );
}
