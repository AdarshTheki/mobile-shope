import { createContext, useEffect, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import { mobiles } from '../flipkart';

// Create Context
export const ProductContext = createContext();

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
};

const ProductProvider = ({ children }) => {
  // This Method Run to ProductReducer With Pure Function
  const [state, dispatch] = useReducer(ProductReducer, initialState);

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

  const updateCheckbox = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    dispatch({ type: 'UPDATE_CHECKBOX', payload: { name, checked } });
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

  return (
    <ProductContext.Provider
      value={{
        ...state,
        updateFilterValue,
        toggleCategory,
        clearAllFilter,
        addToCart,
        removeFromCart,
        clearAllCart,
        increaseQty,
        decreaseQty,
        updateCheckbox,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;