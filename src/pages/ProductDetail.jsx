import React from 'react';
import { useProducts } from '../context/Products_Context';
import ProductItem from '../components/Product/ProductItem';
import ChooseVariant from '../components/detail/ChooseVariant';
import Items from '../components/Product/Items';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { products } = useProducts();
  const [categories, setCategories] = React.useState([]);
  const [productName, setProductName] = React.useState([]);
  const { id } = useParams();
  const single_product = products?.filter((p) => p?.id === Number(id));

  React.useEffect(() => {
    const names = single_product[0]?.name.split(' (');
    if (names) {
      const data = products?.filter((product) => product?.name?.includes(names[0]));
      setProductName(data);
    }
    const category = single_product[0]?.category;
    if (category) {
      const data = products?.filter((product) => product?.category === category);
      setCategories(data);
    }
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className='py-5 w-full'>
      <ProductItem products={single_product[0]} />
      <p className='text-center mb-2 font-medium'>Selected Variant :- {single_product[0].name}</p>
      <div className='flex flex-wrap justify-center md:gap-4 gap-2 container mx-auto'>
        {productName.map((item) => (
          <ChooseVariant key={item?.id} {...item} />
        ))}
      </div>
      <button className='bg-blue-600 block px-10 mt-4 mx-auto text-white rounded-2xl py-2 hover:opacity-80 duration-300 text-sm'>
        Add to Cart
      </button>
      <hr className='my-3 border-gray-300' />
      <h4 className='m-2 capitalize'>“{single_product[0]?.category}” {categories.length} products related found</h4>
      <div className='flex justify-between items-center overflow-x-scroll'>
        {categories?.map((category) => (
          <Items key={category?.id} product={category} />
        ))}
      </div>
    </div>
  );
}
