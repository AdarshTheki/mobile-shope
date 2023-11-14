import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import useProductContext from '../context/useProductContext';
import ProductItem from '../components/Product/ProductItem';
import Button from '../utils/Button';

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
        className={`px-2 text-xs font-semibold border-2 mx-1 ${
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
          <h4>
            Select Color Variant: <span className='text-red-500 uppercase'>{color}</span>
          </h4>
          {getColor?.map((color) => (
            <ColorButton key={color} colors={color} />
          ))}
        </div>
        <div className='space-y-2'>
          <h4>
            Storage:{' '}
            <span className='text-red-500 text-sm'>
              {RAM} | {ROM}
            </span>
          </h4>
          <div className='flex'>
            <h4>RAM: </h4>
            {getRam?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRam} check={RAM} />
            ))}
          </div>
          <div className='flex'>
            <h4>ROM: </h4>
            {getRom?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRom} check={ROM} />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto w-[150px] mt-2'>
        <Button
          onClick={() => {
            addToCart({ ...items[0], color, RAM, ROM });
            notify();
          }}
          className='bg-blue-600'>
          Add to Cart
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
