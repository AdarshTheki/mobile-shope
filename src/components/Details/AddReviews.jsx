/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useReview } from '../../context';

export default function AddReviews({ name, url }) {
    const [show, setShow] = useState(false);
    return (
        <div className='p-5'>
            {show && <ModalDialog name={name} url={url} onClose={() => setShow(false)} />}
            <button
                onClick={() => setShow(true)}
                type='submit'
                className='block mx-auto hover:opacity-80 duration-300 bg-blue-600 font-light px-10 py-2 text-sm text-white rounded'>
                Write Review
            </button>
        </div>
    );
}

const ModalDialog = ({ onClose, name, url }) => {
    const [textarea, setTextarea] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const { addReview } = useReview();

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    function handleSubmit() {
        if (textarea.length < 10) return;
        if (!rating) return;
        const review = {
            body: textarea,
            stars: rating,
            likes: 0,
            dislikes: 0,
            name,
            url,
        };
        addReview(review);
        onClose();
    }

    return (
        <div className='fixed z-50 inset-0 overflow-auto flex items-center justify-center bg-slate-800/30'>
            <div className='relative bg-white mx-auto rounded-lg p-10 flex flex-col items-center justify-center gap-2 border w-[400px]'>
                <p>Write your Review</p>
                <p className='text-gray-500 text-xs'>Are you satisfied with the service</p>
                <div className='flex gap-2 items-center'>
                    {[...Array(5)].map((_, index) => {
                        index += 1;
                        return (
                            <FaStar
                                key={index}
                                className={
                                    index <= (hover || rating)
                                        ? 'hover:text-yellow-500 text-yellow-500 cursor-pointer'
                                        : 'hover:text-yellow-500 text-gray-300 cursor-pointer'
                                }
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                size={30}
                            />
                        );
                    })}
                </div>
                <textarea
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    name='textareaRating'
                    id='textareaRating'
                    cols='30'
                    rows='3'
                    minLength={10}
                    maxLength={200}
                    required
                    placeholder='Describe Your Experiences...'
                    className='border border-gray-800 outline-none text-xs p-5'></textarea>
                <div className='flex gap-2'>
                    <button
                        onClick={onClose}
                        className='block mx-auto hover:opacity-80 duration-300 border border-blue-600 p-2 text-xs text-blue-600 font-medium rounded'>
                        Not Now
                    </button>
                    <button
                        onClick={handleSubmit}
                        className='block mx-auto hover:opacity-80 duration-300 bg-blue-600 font-light px-10 py-2 text-sm text-white rounded'>
                        Write Review
                    </button>
                </div>
            </div>
        </div>
    );
};
