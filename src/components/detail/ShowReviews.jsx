/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

import { Stars, formattedDate } from '../../utils';
import { useAuth, useReview } from '../../context';

export default function ShowReviews() {
    const { reviews } = useReview();
    const [select, setSelect] = useState('AZ');

    const filteredReviews = useMemo(() => {
        if (select === 'AZ') {
            return reviews.sort((a, b) => a.name.localeCompare(b.name));
        } else if (select === 'ZA') {
            return reviews.sort((a, b) => b.name.localeCompare(a.name));
        } else if (select === 'ASC') {
            return reviews.sort((a, b) => b.stars - a.stars);
        } else if (select === 'DSC') {
            return reviews.sort((a, b) => a.stars - b.stars);
        } else {
            return reviews;
        }
    }, [select, reviews]);

    return (
        <div>
            <div className='flex py-5 justify-between items-center'>
                <h2 className='font-medium text-lg'>Reviews</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <select
                        id='countries'
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer'>
                        <option value='AZ'>Name (A-Z)</option>
                        <option value='ZA'>Name (Z-A)</option>
                        <option value='ASC'>Rating Asc</option>
                        <option value='DSC'>Rating Dsc</option>
                    </select>
                </form>
            </div>
            {filteredReviews.length
                ? filteredReviews.map((review) => <ReviewItem key={review.$id} {...review} />)
                : null}
        </div>
    );
}

const ReviewItem = ({
    name,
    user_name,
    url,
    stars,
    body,
    $updatedAt,
    $permissions = [],
    likes,
    dislikes,
    $id,
}) => {
    const { deleteReview } = useReview();
    const { user } = useAuth();

    const ratings = [
        { value: 1, label: 'unacceptable' },
        { value: 2, label: 'weak' },
        { value: 3, label: 'acceptable' },
        { value: 4, label: 'good' },
        { value: 5, label: 'excellent' },
    ];

    let mood = ratings.find((r) => r.value === Math.round(stars));

    const permission = $permissions[0]?.split('user:')[1]?.slice(0, -2);

    return (
        <div className='flex mb-2 pb-2 items-center border-b border-gray-300'>
            <img src={url} alt={name} className='object-contain block max-w-[60px] mr-5' />
            <div className='w-full space-y-2'>
                <div className='capitalize w-full flex justify-between items-center font-medium'>
                    <p>{user_name}</p>
                    {user?.$id == permission ? (
                        <MdDeleteOutline
                            className='text-2xl text-red-600 cursor-pointer hover:text-red-800'
                            onClick={() => deleteReview($id)}
                        />
                    ) : null}
                </div>
                <p className='text-xs text-blue-600 font-medium'>{name}</p>
                <div className='flex flex-wrap font-light text-sm gap-2 items-center capitalize'>
                    <p className='text-xs text-green-600 font-medium'>{mood?.label}</p>
                    <Stars starts={stars} />
                    <p className='text-xs font-medium'>{formattedDate($updatedAt)}</p>
                </div>
                <h2 className='text-sm min-h-[30px] capitalize text-gray-500'>{body}</h2>
                {/* <div className='flex items-center w-1/2 gap-5'>
                    <button onClick={() => addLike($id)} className='flex items-center'>
                        <AiFillLike className={`text-xl text-blue-500`} />
                        <span className='text-xs'>{likes}</span>
                    </button>
                    <button onClick={() => addDislike($id)} className='flex items-center'>
                        <AiFillDislike className={`text-xl text-blue-500`} />
                        <span className='text-xs'>{dislikes}</span>
                    </button>
                </div> */}
            </div>
        </div>
    );
};
