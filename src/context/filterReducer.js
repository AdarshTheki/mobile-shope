import { createContext, useReducer } from 'react';
import reducers from './filterProvider';

// Create Context
export const filterContext = createContext();

const initialState = {
  filter_product: [],
  filters: {
    text: '',
    category: 'all',
    price: '',
  },
};

// Create Provider to Filter Products
const [state, dispatch] = useReducer(reducers, initialState);

const updateFilterValue = (event) => {
  let name = event.target.name;
  let value = event.target.value;
  return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
};
