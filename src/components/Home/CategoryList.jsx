// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from 'react';
import Tab from '../../context/TabCategory';
import { useFilter } from '../../context/Filter_Context';
import { getUniqueValues } from '../../utils/helpers';
import Items from '../Product/Items';

export default function CategoryList() {
  const { all_products } = useFilter();

  const categories = useMemo(() => getUniqueValues(all_products, 'category'), [all_products]);

  const [currentTabIndex, setIndex] = useState('apple');

  const handleChange = (newIndex) => {
    setIndex((prev) => (newIndex === prev ? 0 : newIndex));
  };

  return (
    <div>
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <div className='my-4 bg-blue-200'>
          <Tab.HeaderContainer>
            {categories
              .filter((f) => f !== 'all')
              .map((c) => (
                <Tab.Item label={c} index={c} key={c} />
              ))}
          </Tab.HeaderContainer>
        </div>
        <div className='bg-gray-200 md:px-18 sm:px-10 px-5'>
          <Tab.ContentContainer>
            {categories.map((category) => (
              <Tab.ContentItem key={category} index={category}>
                {all_products
                  .filter((p) => p.category === category)
                  .slice(0, 8)
                  .map((item) => (
                    <Items key={item.id} product={item} />
                  ))}
              </Tab.ContentItem>
            ))}
          </Tab.ContentContainer>
        </div>
      </Tab>
    </div>
  );
}
