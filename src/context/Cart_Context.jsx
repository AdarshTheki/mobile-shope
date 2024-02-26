import React from 'react';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY,
    CHANGE_ADDRESS,
} from '../assets/action';
import reducers from './cart_reducer';

const data = [
    {
        id: 42,
        name: 'Infinix HOT 30i (Mirror Black, 64 GB)',
        price: 7499,
        amount: 1,
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/q/v/-original-imagz3curry7jhsy.jpeg?q=70',
    },
];

const initialState = {
    cart: data,
    total_items: 0,
    total_amount: 0,
    shipping_fee: 180,
    address: {},
};

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducers, initialState);

    // add to cart
    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });
    };
    // remove item
    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
    };
    // clear cart
    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };
    // increase qty
    const increaseQty = (id) => {
        dispatch({ type: INCREASE_CART_QUANTITY, payload: { id } });
    };
    // decrease qty
    const decreaseQty = (id) => {
        dispatch({ type: DECREASE_CART_QUANTITY, payload: { id } });
    };
    // change Address
    const changeAddress = (item) => {
        dispatch({ type: CHANGE_ADDRESS, payload: item });
    };

    React.useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS });
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                increaseQty,
                decreaseQty,
                changeAddress,
            }}>
            {children}
        </CartContext.Provider>
    );
};
