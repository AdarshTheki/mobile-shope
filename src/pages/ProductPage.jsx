import React from 'react';
import ProductFilter from '../components/Product/ProductFilter';
import ProductListing from '../components/Product/ProductListing';

export default function Products() {
    return (
        <div className='w-full max-h-[150vh] relative sm:flex justify-between'>
            <ProductFilter />
            <ProductListing />
        </div>
    );
}
