import React from 'react';
import Reducer from './filter_reducer';
import { useProducts } from './index';

import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
    CLEAR_BATTERY,
    CLEAR_CAMERA,
    CLEAR_CATEGORY,
    CLEAR_DISPLAY,
    CLEAR_RAM_MEMORY,
    TOGGLE_CHECKBOX,
} from '../assets/action';

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        selectedCategory: [],
        selectedBattery: [],
        selectedCamera: [],
        selectedDisplay: [],
        selectedRam: [],
        color: 'all',
        stars: 0,
        page: 20,
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
        dispatch({ type: UPDATE_SORT, payload: e.target.value });
    };
    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'color') {
            value = e.target.dataset.color;
        }
        if (name === 'price') {
            value = Number(value);
        }
        if (name === 'stars') {
            value = Number(value);
        }
        if (name === 'shipping') {
            value = e.target.checked;
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    const toggleCheckbox = (category, value) => {
        dispatch({ type: TOGGLE_CHECKBOX, payload: { category, value } });
    };

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };
    const clearCategory = () => {
        dispatch({ type: CLEAR_CATEGORY });
    };
    const clearCamera = () => {
        dispatch({ type: CLEAR_CAMERA });
    };
    const clearDisplay = () => {
        dispatch({ type: CLEAR_DISPLAY });
    };
    const clearRam = () => {
        dispatch({ type: CLEAR_RAM_MEMORY });
    };
    const clearBattery = () => {
        dispatch({ type: CLEAR_BATTERY });
    };

    React.useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                updateSort,
                updateFilters,
                clearFilters,
                toggleCheckbox,
                clearCategory,
                clearCamera,
                clearDisplay,
                clearRam,
                clearBattery,
            }}>
            {children}
        </FilterContext.Provider>
    );
};
