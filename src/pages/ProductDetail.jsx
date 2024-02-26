import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../context';
import DetailSection from '../components/Detail/DetailSection';
import AddReviews from '../components/Detail/AddReviews';
import ShowReviews from '../components/Detail/ShowReviews';
import ProductRow from '../components/Product/listing/ProductRow';

export default function ProductDetailPage() {
    const { products } = useProducts();
    const { id } = useParams();
    const singleProduct = useMemo(
        () => products?.find((p) => p?.id === Number(id)),
        [id, products]
    );
    const [relatedProducts, setRelatedProducts] = React.useState([]);

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
            <DetailSection products={singleProduct} />

            <div className='mx-auto max-w-[90%]'>
                <ShowReviews />
                <AddReviews {...singleProduct} />
            </div>

            <div className='overflow-x-auto overflow-y-hidden scrollbar-thin bg-gray-200 scrollbar-track-transparent scrollbar-thumb-slate-500'>
                <h2 className=' m-2 text-lg'>Related Products: {relatedProducts.length}</h2>
                <div className='flex gap-4'>
                    {relatedProducts?.map((item) => (
                        <ProductRow key={item?.id} product={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
