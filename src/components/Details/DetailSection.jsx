/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { BsFillBagHeartFill } from 'react-icons/bs';
import toast from 'react-hot-toast';

import ImageSlider from './ImageSlider';
import { Stars, formatePrice, Button } from '../../utils';
import { useCart } from '../../context';

export default function ProductDetailCart({
    name,
    url,
    stars = 2,
    ratings = 100,
    reviews = 120,
    ram,
    rom,
    display,
    camera,
    battery,
    price,
    shipping,
    id,
}) {
    const { addToCart } = useCart();

    const addToCartHandler = () => {
        addToCart({ id, name, price, url });
        toast.success('Add to Cart success 👏', { duration: 3000, position: 'top-right' });
    };

    return (
        <div className='grid sm:grid-cols-2 gap-5 justify-between'>
            <ImageSlider url={url} name={name} />
            <div className='space-y-4 max-w-md mx-auto'>
                <h2 className='text-xl font-medium text-blue-700'>{name}</h2>
                <ul className='list-disc text-sm list-inside space-y-1'>
                    <Stars starts={stars} reviews={reviews} ratings={ratings} />
                    <li>{`${ram} GB RAM | ${rom} GB ROM storage`}</li>
                    <li>{`${display} Full HD+ Display`}</li>
                    <li>{`${camera} MP Rear Camera`}</li>
                    <li>{`${battery} mAh Battery`} </li>
                    <li>
                        Handset, Protective Case, Quick Start Guide, charger 22 W, Warranty Card Box
                        Accessories
                    </li>
                </ul>
                <div className='flex gap-x-2 flex-wrap capitalize text-gray-600'>
                    <p>
                        Delivery:
                        <span
                            className={`px-2 py-1 rounded font-medium text-xs ${
                                shipping ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'
                            }`}>
                            {shipping ? 'Free' : 'Paid'}
                        </span>
                    </p>
                    <p>
                        Stock:
                        <span className='text-red-700 bg-red-200 p-1 py-0 rounded-full font-medium text-xs'>
                            {Math.floor(stars)}
                        </span>
                    </p>
                </div>
                <h2 className='text-2xl font-medium'>{`Price: ${formatePrice(price)}/-`}</h2>
                <Button
                    rightIcon={<BsFillBagHeartFill fontSize={14} />}
                    onClick={addToCartHandler}
                    className='text-white bg-blue-600'>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
