import React from 'react';
import { CartContext } from './Cart_Context';

// make sure use
const useCartContext = () => {
  return React.useContext(CartContext);
};
export default useCartContext;
