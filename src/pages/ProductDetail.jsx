import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../context';
import DetailSection from '../components/detail/DetailSection';
import AddReviews from '../components/detail/AddReviews';
import ShowReviews from '../components/detail/ShowReviews';
import ProductRow from '../components/product/ProductRow';

export default function ProductDetailPage() {
  const { products } = useProducts();
  const { id } = useParams();
  const singleProduct = useMemo(() => products?.find((p) => p?.id === Number(id)), [id, products]);
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
    <div className='py-5 w-full'>
      <DetailSection products={singleProduct} />

      <div className='py-5 bg-gray-200'>
        <h2 className='font-semibold text-gray-700 text-xl text-center mb-5'>Ratings & Reviews</h2>
        <div className='md:grid grid-cols-2 items-start'>
          <AddReviews {...singleProduct} />
          <ShowReviews />
        </div>
      </div>

      <div className='overflow-x-auto overflow-y-hidden scrollbar-thin bg-gray-200  scrollbar-track-transparent scrollbar-thumb-slate-500'>
        <h2 className='font-semibold text-gray-700 text-xl text-center my-4'>Related Products</h2>
        <div className='flex'>
          {relatedProducts?.map((item) => (
            <ProductRow key={item?.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
