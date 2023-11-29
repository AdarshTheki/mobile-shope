import React from 'react';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
} from '../action';
import reducers from '../reducers/cart_reducer';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 180,
};

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  // add to cart
  const addToCart = ({ id, color, name, amount, ram, rom, image, price }) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, name, amount, ram, rom, image, price } });
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

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
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
        dispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
};
