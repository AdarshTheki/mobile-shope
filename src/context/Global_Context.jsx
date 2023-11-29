import { createContext, useEffect, useReducer } from 'react';
import { global_reducer } from '../reducers/global_reducer';
import { mobiles } from '../flipkart';

// Create Context
export const GlobalContext = createContext();
// Define your Initial Product State Here

const initialState = {
  allProducts: [],
  filterProducts: [],
  cartItems: [],
  filters: {
    selectedCategories: [],
    text: '',
    price: '',
    rating: '',
    review: '',
    battery: 0,
    camera: '',
    processor: '',
    storage: '',
    free_delivery: false,
  },
  auth: {
    status: false,
    userData: null,
  },
};

export const GlobalProvider = ({ children }) => {
  // This Method Run to ProductReducer With Pure Function
  const [state, dispatch] = useReducer(global_reducer, initialState);

  const login = (data) => {
    dispatch({ type: 'LOGIN', payload: { data } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Get The Name & Value with Click Event or Input Event
  const updateFilterValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
  };

  const toggleCategory = (category) => {
    dispatch({ type: 'TOGGLE_CATEGORY', payload: { category } });
  };

  const clearAllFilter = () => {
    dispatch({ type: 'CLEAR_ALL_FILTER' });
  };

  const clearAllCheckbox = () => {
    dispatch({ type: 'CLEAR_ALL_CHECKBOX' });
  };

  const clearAllStorage = () => {
    dispatch({ type: 'CLEAR_ALL_STORAGE' });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const clearAllCart = () => {
    dispatch({ type: 'CLEAR_ALL_CART' });
  };

  const increaseQty = (id) => {
    dispatch({ type: 'INCREASE_QTY', payload: { id } });
  };

  const decreaseQty = (id) => {
    dispatch({ type: 'DECREASE_QTY', payload: { id } });
  };

  // Filter All Products
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  }, [state.filters]);

  // Get the Products at Time Load Page
  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS', payload: mobiles });
  }, []);

  // user Authenticate
  useEffect(() => {
    dispatch({ type: 'LOGOUT' });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        login,
        logout,
        updateFilterValue,
        toggleCategory,
        clearAllFilter,
        addToCart,
        removeFromCart,
        clearAllCart,
        increaseQty,
        decreaseQty,
        clearAllCheckbox,
        clearAllStorage,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
