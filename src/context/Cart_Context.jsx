import React from 'react';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
  COUPON_USE_TOTALS,
  CHANGE_ADDRESS,
} from '../action';
import reducers from '../reducers/cart_reducer';

const data = [
  {
    id: 7,
    name: 'APPLE iPhone 12 (Black, 64 GB)',
    price: 40999,
    amount: 1,
    url: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70',
  },
  {
    id: 184,
    name: 'Infinix HOT 30 5G (Knight Black, 128 GB)',
    price: 12499,
    amount: 2,
    url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/w/x/hot-30-5g-x6832-infinix-original-imagrfwzw66ubgnk.jpeg?q=70',
  },
];

const detail = {
  name: 'Adarsh Verma',
  address:
    'ARAMARK Ltd 30 Commercial Road Fratton PORTSMOUTH Hampshire usually comes last. In much of Europe,',
  phone: '539982345',
  city: 'Bhutan',
  country: 'Indonashia',
  postal_code: '4422100',
};

const initialState = {
  cart: data,
  total_items: 0,
  total_amount: 0,
  coupon_amount: 0,
  coupon_code: '',
  shipping_fee: 180,
  address: detail,
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
  // use coupon code
  const couponCode = (coupon) => {
    dispatch({ type: COUPON_USE_TOTALS, payload: { coupon } });
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
        couponCode,
        changeAddress,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// use context
export const useCart = () => {
  return React.useContext(CartContext);
};
