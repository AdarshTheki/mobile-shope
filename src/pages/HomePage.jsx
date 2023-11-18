import React, { Fragment } from 'react';
import Banner from '../components/Home/Banner';
import CategoryItem from '../components/Home/CategoryItem';

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <CategoryItem />
    </Fragment>
  );
}
