/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Permission, Role, Query } from 'appwrite';
import { databases } from '../appwrite/config';
import { useAuth } from './index';

const ReviewContext = React.createContext({
    reviews: [],
    loading: true,
    addReview: () => {},
    addLike: () => {},
    addDislike: () => {},
    deleteReview: () => {},
});

const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    const DATABASE = '65dc203a459215fe42be';
    const COLLECTION = '65de27efadf0302dfc6d';

    const init = async (queries = [Query.limit(10)]) => {
        try {
            const result = await databases.listDocuments(DATABASE, COLLECTION, queries);
            setReviews(result.documents);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        init();
    }, []);

    const addReview = async (review) => {
        let permissions = [Permission.write(Role.user(user?.$id))];
        let payload = {
            user_name: user?.name,
            ...review,
        };
        const newReview = await databases.createDocument(
            DATABASE,
            COLLECTION,
            Date.now().toString(),
            payload,
            permissions
        );
        setReviews([...reviews, newReview]);
    };

    const addLike = async (reviewId) => {
        const review = reviews.find((r) => r.$id === reviewId);
        if (review) {
            review.likes += 1;
            await databases.updateDocument(DATABASE, COLLECTION, reviewId, review);
        }
    };

    const addDislike = async (reviewId) => {
        const review = reviews.find((r) => r.$id === reviewId);
        if (review) {
            review.dislikes += 1;
            await databases.updateDocument(DATABASE, COLLECTION, reviewId, review);
        }
    };

    const deleteReview = async (reviewId) => {
        await databases.deleteDocument(DATABASE, COLLECTION, reviewId);
        setReviews(reviews.filter((r) => r.$id !== reviewId));
    };

    return (
        <ReviewContext.Provider
            value={{ reviews, loading, addReview, addLike, addDislike, deleteReview }}>
            {children}
        </ReviewContext.Provider>
    );
};

export { ReviewContext, ReviewProvider };
