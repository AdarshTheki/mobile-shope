/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useProducts } from '../../context';

export default function ImageSlider({ url, name }) {
  const { products } = useProducts();
  const names = name?.split(' (');
  const variants = products.filter((i) => i?.name.includes(names[0]));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='w-[300px] mx-auto'>
      <img src={url} alt={name} className='object-contain mx-auto' />
      <Slider {...settings}>
        {variants?.map((item) => {
          const { id, name, url } = item;
          return (
            <Link key={id} className='min-w-[60px]' to={`/product/${id}`} title={name}>
              <img
                src={url}
                alt=''
                title={name}
                width={60}
                className='object-contain rounded-lg border-2 hover:border-blue-600'
              />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
