import React from 'react';
import { useFilter } from '../../../context/Filter_Context';
import { getUnique } from '../../../utils/helpers';
import FilterComponent from './FilterComponent';

export default function FilterCheckbox() {
  const { all_products } = useFilter();

  const batteries = getUnique(all_products, 'battery');
  const categories = getUnique(all_products, 'category');
  const camera = getUnique(all_products, 'camera');
  const display = getUnique(all_products, 'display');
  const ram = getUnique(all_products, 'ram');

  return (
    <>
      <FilterComponent items={categories} name={'Category'} label={''} />
      <FilterComponent items={batteries} name={'Battery'} label={'mAh'} />
      <FilterComponent items={ram} name={'Ram'} label={'GB'} />
      <FilterComponent items={display} name={'Display'} label={''} />
      <FilterComponent items={camera} name={'Camera'} label={'Rear MP'} />
      
    </>
  );
}
