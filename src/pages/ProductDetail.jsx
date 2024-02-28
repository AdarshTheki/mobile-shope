/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../context';
import DetailSection from '../components/Details/DetailSection';
import AddReviews from '../components/Details/AddReviews';
import ShowReviews from '../components/Details/ShowReviews';
import ProductRow from '../components/Product/listing/ProductRow';

export default function ProductDetailPage() {
    const [relatedProducts, setRelatedProducts] = React.useState([]);
    const { products } = useProducts();
    const { id } = useParams();

    const singleProduct = useMemo(
        () => products?.find((p) => p?.id === Number(id)),
        [id, products]
    );

    React.useEffect(() => {
        const { category } = singleProduct;
        if (category) {
            setRelatedProducts(products.filter((i) => i.category === category));
        }
    }, [products, singleProduct]);

    React.useEffect(() => {
        window.scroll(0, 0);
    }, [id]);

    return (
        <div className='py-5 w-full bg-slate-100'>
            <div className='mx-auto max-w-[90%]'>
                <DetailSection {...singleProduct} />
                <ShowReviews />
                <AddReviews {...singleProduct} />
            </div>
            <RelatedProduct products={relatedProducts} />
        </div>
    );
}

function RelatedProduct({ products }) {
    return (
        <div className='overflow-x-auto overflow-y-hidden scrollbar-thin bg-gray-200 scrollbar-track-transparent scrollbar-thumb-slate-500'>
            <h2 className=' m-2 text-lg'>Related Products: {products.length}</h2>
            <div className='flex gap-4'>
                {products?.map((item) => (
                    <ProductRow key={item?.id} product={item} />
                ))}
            </div>
        </div>
    );
}
