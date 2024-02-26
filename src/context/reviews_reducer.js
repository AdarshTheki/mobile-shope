import { ADD_REVIEW, ADD_LIKE, ADD_DISLIKE, DELETE_REVIEW } from '../assets/action';

const getCurrentDateTime = () => {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return now.toLocaleDateString('en-US', options);
};

export const reviews_reducer = (state, action) => {
    switch (action.type) {
        case ADD_REVIEW: {
            const { id, user_name } = action.payload;
            const tempItem = state.reviews.find((i) => i.id === id);
            const updateReviews = tempItem
                ? state.reviews.map((i) =>
                      i.user_name === user_name
                          ? i
                          : {
                                ...i,
                                reviews: {
                                    ...action.payload,
                                    likes: 0,
                                    dislikes: 0,
                                    timestamp: getCurrentDateTime(),
                                },
                            }
                  )
                : [
                      ...state.reviews,
                      { ...action.payload, likes: 0, dislikes: 0, timestamp: getCurrentDateTime() },
                  ];

            return { ...state, reviews: updateReviews };
        }

        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter((r) => r.id !== action.payload),
            };

        case ADD_LIKE:
            return {
                ...state,
                reviews: state.reviews.map((review) =>
                    review.id === action.payload
                        ? { ...review, likes: review.likes + 1, timestamp: getCurrentDateTime() }
                        : review
                ),
            };

        case ADD_DISLIKE:
            return {
                ...state,
                reviews: state.reviews.map((review) =>
                    review.id === action.payload
                        ? {
                              ...review,
                              dislikes: review.dislikes + 1,
                              timestamp: getCurrentDateTime(),
                          }
                        : review
                ),
            };

        default:
            return state;
    }
};
