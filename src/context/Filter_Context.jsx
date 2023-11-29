import React from 'react';
import Reducer from '../reducers/filter_reducer';
import { useProducts } from './Products_Context';
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../action';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    battery: 'all',
    category: 'all',
    color: 'all',
    stars: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProducts();
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  // functions
  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  const updateSort = (e) => {
    // just for demonstration
    // const name = e.target.name;
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'colors') {
      value = e.target.dataset.color;
    }
    if (name === ('price')) {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    console.log(name, value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  React.useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return React.useContext(FilterContext);
};
