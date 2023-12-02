// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import Banner from '../components/home/Banner';
import CategoryList from '../components/home/CategoryList';

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <CategoryList />
    </Fragment>
  );
}
