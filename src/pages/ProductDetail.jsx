import React, { useMemo } from 'react';
import { useProducts } from '../context/Products_Context';
import ProductDetailCart from '../components/detail/ProductDetailCart';
import ProductReviews from '../components/detail/ProductReviews.jsx';
import Items from '../components/product/Items';
import { useParams } from 'react-router-dom';

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
      <ProductDetailCart products={singleProduct} />

      <hr className='my-2 border-gray-300' />

      <ProductReviews {...singleProduct} />

      <div className=' overflow-x-auto overflow-y-hidden scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-slate-500'>
        <div className='flex'>
          {relatedProducts?.map((item) => (
            <Items key={item?.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
