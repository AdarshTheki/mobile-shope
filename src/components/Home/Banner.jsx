import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import iphone from '../../assets/iph.png';
import { Button } from '../../utils';

export default function Banner() {
    const Navigate = useNavigate();

    return (
        <section className='md:flex px-10 items-center bg-gradient-to-tl from-purple-600 via-indigo-600 to-blue-600'>
            <div className='flex-grow'>
                <img src={iphone} className='object-contain' />
            </div>
            <div className='grid flex-grow min-w-screen-xl px-4 py-12 mx-auto gap-6 lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12'>
                <div className='lg:col-span-12 flex flex-col justify-center items-center text-center'>
                    <h1 className='max-w-3xl mb-3 text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl text-gray-200'>
                        Discover the Latest Mobile Trends
                    </h1>
                    <p className='max-w-2xl mb-4 font-light text-lg lg:mb-6 md:text-base lg:text-lg text-gray-100'>
                        Explore our collection of stylish Mobiles and accessories to stay in vogue.
                    </p>
                    <Button
                        onClick={() => Navigate('/products')}
                        rightIcon={<FaArrowRight />}
                        className='text-white bg-blue-600 hover:bg-blue-700'>
                        Shop Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
