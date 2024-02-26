/* eslint-disable react/prop-types */
import React from 'react';
import { ADD_REVIEW, ADD_LIKE, ADD_DISLIKE, DELETE_REVIEW } from '../assets/action';
import { reviews_reducer } from './reviews_reducer';
import { useProducts } from './index';

export const ReviewContext = React.createContext();

const data = [
    {
        user_name: 'Anil Gupta',
        label: 'excellent',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque?\n\n',
        stars: 5,
        name: 'SAMSUNG Galaxy F04 (Jade Purple, 64 GB)',
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/g/1/-original-imaguechpztrxtgh.jpeg?q=70',
        id: 37,
        likes: 14,
        dislikes: 6,
        timestamp: 'Dec 13, 2023, 11:03:34 AM',
    },
    {
        user_name: 'Adarsh Verma',
        label: 'weak',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque?\n\n\n',
        stars: 2,
        name: 'SAMSUNG Galaxy A14 5G (Dark Red, 128 GB)',
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/c/5/-original-imagmefcgvntdtha.jpeg?q=70',
        id: 63,
        likes: 2,
        dislikes: 8,
        timestamp: 'Dec 13, 2023, 11:03:44 AM',
    },
];

export const ReviewProvider = ({ children }) => {
    const { products } = useProducts();
    const [state, dispatch] = React.useReducer(reviews_reducer, { products, reviews: data });

    // functions
    const addReview = (review) => {
        dispatch({ type: ADD_REVIEW, payload: review });
    };

    const addLike = (reviewId) => {
        dispatch({ type: ADD_LIKE, payload: reviewId });
    };

    const addDislike = (reviewId) => {
        dispatch({ type: ADD_DISLIKE, payload: reviewId });
    };

    const deleteReview = (reviewId) => {
        dispatch({ type: DELETE_REVIEW, payload: reviewId });
    };

    React.useEffect(() => {
        // save to localStorage with reviews change
        localStorage.setItem('reviews', JSON.stringify(state.reviews));
    }, [state.reviews]);

    return (
        <ReviewContext.Provider value={{ ...state, addReview, addLike, addDislike, deleteReview }}>
            {children}
        </ReviewContext.Provider>
    );
};
