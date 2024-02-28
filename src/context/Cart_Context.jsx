/* eslint-disable react/prop-types */
import React from 'react';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY,
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    SELECTED_ADDRESS,
} from '../assets/action';
import reducers from './cart_reducer';

const initialState = {
    cart: [
        {
            id: 42,
            name: 'Infinix HOT 30i (Mirror Black, 64 GB)',
            price: 7499,
            amount: 1,
            url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/q/v/-original-imagz3curry7jhsy.jpeg?q=70',
        },
    ],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 180,
    address: {},
    addresses: [
        {
            id: 1,
            name: 'John Doe',
            address: '123 Main St, Anytown, USA',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
            deliveryAt: 'home',
            phone: '+918788563729',
        },
        {
            id: 2,
            name: 'Jane Doe',
            address: '456 Elm St, Anytown, USA',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
            deliveryAt: 'work',
            phone: '+213829929486',
        },
    ],
};

export const CartContext = React.createContext({
    cart: initialState.cart,
    total_items: initialState.total_items,
    total_amount: initialState.total_amount,
    shipping_fee: initialState.shipping_fee,
    addresses: initialState.addresses,
    address: initialState.address,
    addAddress: () => {},
    removeAddress: () => {},
    selectedAddress: () => {},
    addToCart: () => {},
    removeItem: () => {},
    clearCart: () => {},
    increaseQty: () => {},
    decreaseQty: () => {},
});

export const CartProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducers, initialState);

    const addToCart = async (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });
    }; 

    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
    };
    
    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const increaseQty = (id) => {
        dispatch({ type: INCREASE_CART_QUANTITY, payload: { id } });
    };

    const decreaseQty = (id) => {
        dispatch({ type: DECREASE_CART_QUANTITY, payload: { id } });
    };

    const addAddress = (address) => {
        dispatch({ type: ADD_ADDRESS, payload: address });
    };

    const removeAddress = (id) => {
        dispatch({ type: REMOVE_ADDRESS, payload: { id } });
    };

    const selectedAddress = (address) => {
        dispatch({ type: SELECTED_ADDRESS, payload: address });
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
                addAddress,
                removeAddress,
                selectedAddress,
            }}>
            {children}
        </CartContext.Provider>
    );
};
