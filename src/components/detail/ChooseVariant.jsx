import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../../utils/index';
import { formatePrice } from '../../utils/helpers';
import useCartContext from '../../context/useCartContext';

export default function ChooseVariant({ items }) {
  const { addToCart } = useCartContext();

  const getColor = ['royalblue', 'blueviolet', 'lavender', 'gray', 'cadetblue', 'crimson'];
  const getRam = [4, 6, 8, 12];
  const getRom = [64, 128, 256];

  const [color, setColor] = React.useState('royalblue');
  const [RAM, setRam] = React.useState(4);
  const [ROM, setRom] = React.useState(64);

  const price = RAM * 199 + ROM * 20 + items.current_price;
  const tempName = items.name.split(' ');
  const name = `${tempName[0]} ${tempName[2]} (${color} ${RAM}GB | ${ROM}GB)`;

  const cartHandler = () => {
    const { id, img_url, name } = items;
    const names = name.split(' ');
    const currentName = `${names[0]} ${names[2]} (${color} ${RAM}GB | ${ROM}GB)`;
    addToCart({
      id,
      color,
      name: currentName,
      amount: 1,
      ram: Number(RAM),
      rom: Number(ROM),
      image: img_url,
      price: Number(price),
    });
    toast.success('successful Added to Cart');
  };

  const ColorButton = ({ colors }) => {
    return (
      <button
        onClick={(e) => setColor(e.target.value)}
        value={colors}
        style={{ backgroundColor: colors }}
        className={`w-[30px] h-[30px] rounded-full m-2 ${
          colors === color && 'outline outline-2 outline-blue-500 outline-offset-2'
        }`}></button>
    );
  };

  const StorageButton = ({ storage, setData, check }) => {
    return (
      <button
        onClick={(e) => setData(e.target.value)}
        value={storage}
        className={`px-2 text-sm font-medium border hover:text-blue-600 rounded mx-1 ${
          check == storage ? 'text-blue-600  border-blue-600' : 'text-slate-600  border-slate-400'
        }`}>
        {storage} GB
      </button>
    );
  };

  return (
    <div className='sm:mx-auto mx-10 sm:grid grid-cols-2 items-start justify-center max-w-[600px]'>
      <div className='space-y-2'>
        <p className='font-semibold capitalize'>{name}</p>
        <p>Available : In Stock</p>
        <p>Brand: {items?.category}</p>
        <p className='uppercase'>SKU : {items?.id + color + RAM + ROM}</p>
        <p>Price: {formatePrice(price, 'INR')}</p>
        <p className='w-[50px]'>
          <img src={items.img_url} alt='' className=' hover:cursor-zoom-in' />
        </p>
      </div>
      <div className='flex-grow grid gap-5 mx-auto'>
        <div>
          <p>
            Color Variant: <span className='text-red-600 capitalize'>{color}</span>
          </p>
          {getColor?.map((color) => (
            <ColorButton key={color} colors={color} />
          ))}
        </div>
        <div className='space-y-2'>
          <p>
            Storage:{' '}
            <span className='text-red-600 text-sm'>
              {RAM} RAM | {ROM} ROM
            </span>
          </p>
          <div className='flex'>
            <p className=' text-sm'>RAM: </p>
            {getRam?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRam} check={RAM} />
            ))}
          </div>
          <div className='flex'>
            <p className=' text-sm'>ROM: </p>
            {getRom?.map((ram) => (
              <StorageButton key={ram} storage={ram} setData={setRom} check={ROM} />
            ))}
          </div>
        </div>
        <Button onClick={cartHandler} className='bg-blue-600'>
          Add to Cart
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
