import React, { useMemo } from 'react';
import { useCart } from '../context/Cart_Context';
import { useProducts } from '../context/Products_Context';
import ProductItem from '../components/Product/ProductItem';
import ChooseVariant from '../components/detail/ChooseVariant';
import Items from '../components/Product/Items';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetailPage() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { id } = useParams();

  const [categories, setCategories] = React.useState([]);
  const [productName, setProductName] = React.useState([]);

  const singleProduct = useMemo(() => products?.find((p) => p?.id === Number(id)), [id, products]);

  React.useEffect(() => {
    if (singleProduct) {
      const { name, category } = singleProduct;
      const names = name?.split(' (');
      setProductName(products?.filter((p) => p.name?.includes(names[0])));
      setCategories(products?.filter((p) => p.category === category));
    }
  }, [id, products, singleProduct]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...singleProduct });
    toast.success('Add to Cart Success 👏', {
      duration: 3000,
      position: 'top-right',
    });
  };

  return (
    <div className='py-5 w-full'>
      <ProductItem products={singleProduct} />

      <div>
        <p className='text-center mb-2 font-medium'>Selected Variant :- {singleProduct.name}</p>
        <button
          onClick={handleAddToCart}
          className='bg-blue-600 block px-10 mb-4 mx-auto text-white rounded-2xl py-2 hover:opacity-80 duration-300 text-sm'>
          Add to Cart
        </button>
      </div>

      <div className='flex flex-wrap justify-center md:gap-4 gap-2 max-w-2xl mx-auto'>
        {productName.map((item) => (
          <ChooseVariant key={item?.id} {...item} />
        ))}
      </div>

      <hr className='my-3 border-gray-300' />

      <h4 className='m-2 capitalize'>
        “{singleProduct?.category}” Related “{categories.length}” products found
      </h4>

      <div className='flex justify-between items-center overflow-x-scroll'>
        {categories?.map((category) => (
          <Items key={category?.id} product={category} />
        ))}
      </div>
      <Toaster toastOptions={{ style: { borderRadius: 0 } }} />
    </div>
  );
}
