import React from 'react'
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import Items from '../Product/Items';

export default function CategoryItem() {
    const { allProducts } = GlobalContext();
    const navigates = useNavigate();
    const categories = ['Apple','Google','Infinix','Motorola','Oneplus','Oppo','Poco','Realme','Redmi','Samsung','Vivo',
    ];

  return (
    <div>
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
    </div>
  );
}
