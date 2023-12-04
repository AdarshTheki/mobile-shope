import React, { useMemo } from 'react';
import { useProducts } from '../context/Products_Context';
import ProductDetailCart from '../components/detail/ProductDetailCart';
import ChooseVariant from '../components/detail/ChooseVariant';
import Items from '../components/product/Items';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { products } = useProducts();
  const { id } = useParams();

  const [variant, setVariant] = React.useState([]);
  const [relatedProducts, setRelatedProducts] = React.useState([]);

  const singleProduct = useMemo(() => products?.find((p) => p?.id === Number(id)), [id, products]);

  React.useEffect(() => {
    const { name, category } = singleProduct;
    if (name) {
      const names = name.split(' (');
      setVariant(products.filter((i) => i?.name.includes(names[0])));
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
      <div className='max-w-3xl flex flex-wrap px-5 gap-4 mx-auto py-5'>
        {variant?.map((item) => (
          <ChooseVariant key={item?.id} {...item} />
        ))}
      </div>
      <hr className='my-2 border-gray-300' />
      <h2></h2>
      <div className='flex px-5 gap-4 mx-auto overflow-x-auto py-5'>
        {relatedProducts?.map((item) => (
          <Items key={item?.id} product={item} />
        ))}
      </div>
    </div>
  );
}
