// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from 'react';
import { getUniqueValues, Button } from '../../utils';
import { useFilter } from '../../context';
import ProductRow from '../Product/listing/ProductRow';

export default function CategoryList() {
    const { all_products } = useFilter();
    const [getCategory, setCategories] = useState('all');
    const [loadMore, setLoadMore] = useState(10);

    const categories = useMemo(() => getUniqueValues(all_products, 'category'), [all_products]);

    const handleChange = (category) => {
        setCategories(category);
    };

    const filterData = all_products?.filter(
        (item) => getCategory === 'all' || item.category === getCategory
    );

    return (
        <div className='bg-gray-200 px-5 pb-5'>
            <div className='flex flex-wrap py-5'>
                {categories.length > 0 &&
                    categories.map((category) => (
                        <Button
                            onClick={() => handleChange(category)}
                            key={category}
                            className='hover:bg-blue-100 hover:text-blue-600 mr-3.5 mb-1 active:bg-blue-300  hover:border-blue-500'>
                            {category}
                        </Button>
                    ))}
            </div>
            <p>Products Found : {filterData?.length}</p>
            <div className='grid-container'>
                {filterData.length > 0 &&
                    filterData
                        ?.slice(0, loadMore)
                        ?.map((item) => <ProductRow key={item.id} product={item} />)}
            </div>
            {loadMore <= filterData.length ? (
                <Button
                    onClick={() => setLoadMore((prev) => prev + 10)}
                    className='hover:text-blue-600 text-sm mt-2 hover:border-blue-400 active:bg-blue-200'>
                    load more
                </Button>
            ) : null}
        </div>
    );
}
