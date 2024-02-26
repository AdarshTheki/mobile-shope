/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

import { Stars } from '../../utils';
import { useReview } from '../../context';

export default function ShowReviews() {
    const { reviews } = useReview();

    const ReviewItem = ({
        name,
        user_name,
        url,
        label,
        stars,
        body,
        id,
        timestamp,
        likes,
        dislikes,
    }) => {
        const { addLike, addDislike, deleteReview } = useReview();

        return (
            <div className='flex mb-2 items-center bg-white p-2'>
                <img src={url} alt={name} className='object-contain block max-w-[60px] mr-5' />
                <div className='w-full'>
                    <div className='capitalize w-full sm:flex justify-between items-center font-medium'>
                        <p className='underline'>{user_name}</p>
                        <p className='text-xs'>{timestamp}</p>
                    </div>
                    <div className='flex font-light text-sm gap-2 items-center capitalize'>
                        <span className='text-blue-600'>{label}</span>
                        <Stars starts={stars} />
                    </div>
                    <h2 className='text-sm min-h-[30px]'>
                        {body ||
                            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque?'}
                    </h2>
                    <div className='flex items-center w-1/2 gap-5'>
                        <button onClick={() => addLike(id)} className='flex items-center'>
                            <AiFillLike className={`text-xl text-blue-500`} />
                            <span className='text-xs'>{likes}</span>
                        </button>
                        <button onClick={() => addDislike(id)} className='flex items-center'>
                            <AiFillDislike className={`text-xl text-blue-500`} />
                            <span className='text-xs'>{dislikes}</span>
                        </button>
                        <MdDelete
                            className='text-2xl text-red-600 cursor-pointer hover:scale-95'
                            onClick={() => deleteReview(id)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>{reviews && reviews.map((review) => <ReviewItem key={review.id} {...review} />)}</div>
    );
}
