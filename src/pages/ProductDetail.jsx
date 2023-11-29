import React from 'react';
import { useProducts } from '../context/Products_Context';
import ProductItem from '../components/Product/ProductItem';
import ChooseVariant from '../components/detail/ChooseVariant';
import Items from '../components/Product/Items';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { products } = useProducts();
  const [categories, setCategories] = React.useState(null);
  const { id } = useParams();
  const single_product = products?.filter((p) => p?.id === Number(id));

  React.useEffect(() => {
    const category = single_product[0]?.category;
    if (category) {
      const data = products?.filter((product) => product?.category === category);
      setCategories(data);
    }
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className='py-5'>
      <ProductItem products={single_product[0]} />
      <ChooseVariant items={single_product[0]} />
      <hr className='my-3 border-gray-300' />
      <h4 className='m-2 capitalize'>“{single_product[0]?.category}” Related products</h4>
      <div className='flex justify-between items-center overflow-x-scroll'>
        {categories?.map((category) => (
          <Items key={category?.id} product={category} />
        ))}
      </div>
    </div>
  );
}
