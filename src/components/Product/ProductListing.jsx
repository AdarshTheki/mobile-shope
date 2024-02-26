import React from 'react';
import ProductColumn from './listing/ProductColumn';
import ProductRow from './listing/ProductRow';
import ProductSort from './listing/ProductSort';
import { useFilter } from '../../context';

export default function ProductList() {
    const { filtered_products, grid_view, filters } = useFilter();
    const { page } = filters;

    return (
        <div className='w-full overflow-y-auto relative bg-slate-200'>
            <div className='sticky top-0 z-10'>
                <ProductSort />
            </div>
            {grid_view ? (
                <div className='grid-container px-2'>
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
