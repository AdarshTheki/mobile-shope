import React, { Fragment } from 'react';
import Banner from '../components/home/Banner';
import CategoryItem from '../components/home/CategoryItem';
// import SearchItem from '../components/Home/SearchItem.jsx';

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      {/* <SearchItem /> */}
      <CategoryItem />
    </Fragment>
  );
}
