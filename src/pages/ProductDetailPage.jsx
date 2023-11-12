import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useProductContext from '../context/useProductContext';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductItem from '../components/Product/ProductItem';

export default function ProductDetailPage() {
  const { allProducts, addToCart } = useProductContext();
  const { pathname } = useLocation();
  const path = pathname.replace('/product/', '');
  const items = allProducts?.filter((product) => product.id == path);

  const getColor = ['#0a4af4', '#90adfa', '#05267e', '#6b54a8', '#a1a8d4', '#3d3b72'];
  const getRam = ['4 GB', '6 GB', '8 GB', '12 GB'];
  const getRom = ['64 GB', '128 GB', '256 GB'];
  const [color, setColor] = useState(getColor[0]);
  const [RAM, setRam] = useState(getRam[0]);
  const [ROM, setRom] = useState(getRom[0]);

  const notify = () => toast.success('successful Added to Cart');

  const ColorButton = ({ colors }) => {
    return (
      <button
        onClick={(e) => setColor(e.target.value)}
        value={colors}
        style={{ backgroundColor: colors }}
        className={`w-[30px] h-[30px] rounded-full m-2 ${
          colors === color && 'outline outline-1 outline-offset-2'
        }`}></button>
    );
  };

  const StorageButton = ({ storage, setData, check }) => {
    return (
      <button
        onClick={(e) => setData(e.target.value)}
        value={storage}
        className={`px-2 font-semibold border-2 mx-1 ${
          check === storage ? 'text-blue-700  border-blue-500' : 'text-gray-700  border-gray-300'
        }`}>
        {storage}
      </button>
    );
  };

  return (
    <div className='py-10'>
      <ProductItem products={items[0]} />
      <div className='max-w-[800px] sm:flex flex-wrap justify-evenly mx-auto'>
        <div>
          <h2 className='font-medium'>
            Select Color Variant: <span className='text-red-500 uppercase'>{color}</span>
          </h2>
          {getColor?.map((color) => (
            <ColorButton key={color} colors={color} />
          ))}
        </div>
        <div>
          <div className='flex m-2 font-medium'>
            <h2>RAM: </h2>
            {getRam?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRam} check={RAM} />
            ))}
          </div>
          <div className='flex m-2 font-medium'>
            <h2>ROM:</h2>
            {getRom?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRom} check={ROM} />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto w-[150px] mt-2'>
        <button
          onClick={() => {
            addToCart({ ...items[0], color, RAM, ROM });
            notify();
          }}
          className='w-full bg-blue-600 hover:bg-blue-800 text-white font-medium rounded py-1'>
          Add to Cart
        </button>
      </div>
      <Toaster />
    </div>
  );
}
