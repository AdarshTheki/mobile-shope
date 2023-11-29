import React from 'react';
import Reducer from '../reducers/products_reducer';
import { mobiles } from '../flipkart';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../action';

const initialState = {
  isSidebarOpen: false,
  products: [],
  single_product: {},
};

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  // function
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const getSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: { id } });
  };

  React.useEffect(() => {
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: mobiles });
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return React.useContext(ProductsContext);
};
