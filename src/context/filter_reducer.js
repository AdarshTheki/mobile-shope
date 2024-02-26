import {
    LOAD_PRODUCTS,
    SET_LIST_VIEW,
    SET_GRID_VIEW,
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

const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            let maxPrice = action.payload.map((p) => p.price);
            maxPrice = Math.max(...maxPrice);
            return {
                ...state,
                all_products: [...action.payload],
                filtered_products: [...action.payload],
                filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
            };
        }
        case SET_GRID_VIEW: {
            return { ...state, grid_view: true };
        }
        case SET_LIST_VIEW: {
            return { ...state, grid_view: false };
        }
        case UPDATE_SORT: {
            return { ...state, sort: action.payload };
        }
        case SORT_PRODUCTS: {
            const { sort, filtered_products } = state;
            let tempProducts = [];
            if (sort === 'id') {
                tempProducts = filtered_products.sort((a, b) => {
                    return a.id - b.id;
                });
            }
            if (sort === 'price-lowest') {
                tempProducts = filtered_products.sort((a, b) => {
                    return a.price - b.price;
                });
            }
            if (sort === 'price-highest') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b.price - a.price;
                });
            }
            if (sort === 'ratings') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b.ratings - a.ratings;
                });
            }
            if (sort === 'reviews') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b.reviews - a.reviews;
                });
            }
            if (sort === 'name-a') {
                tempProducts = filtered_products.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            }
            if (sort === 'name-z') {
                tempProducts = filtered_products.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });
            }
            return { ...state, filtered_products: tempProducts };
        }

        case UPDATE_FILTERS: {
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };
        }

        case TOGGLE_CHECKBOX: {
            const { category, value } = action.payload;
            const selectedCheckbox = state.filters[`selected${category}`];
            const updatedCheckbox = selectedCheckbox?.includes(value)
                ? selectedCheckbox.filter((item) => item !== value)
                : [...selectedCheckbox, value];

            const updatedFilters = { ...state.filters, [`selected${category}`]: updatedCheckbox };
            return { ...state, filters: updatedFilters };
        }

        case FILTER_PRODUCTS: {
            const { all_products } = state;
            const {
                text,
                selectedCategory,
                selectedBattery,
                selectedCamera,
                selectedRam,
                selectedDisplay,
                color,
                stars,
                price,
                shipping,
            } = state.filters;
            let tempProducts = [...all_products];
            if (text) {
                tempProducts = tempProducts.filter((p) => p.name.toLowerCase().includes(text));
            }
            if (color !== 'all') {
                tempProducts = tempProducts.filter((p) => p.color === color);
            }
            if (selectedCategory.length !== 0) {
                tempProducts = tempProducts.filter((p) => selectedCategory.includes(p?.category));
            }
            if (selectedBattery.length !== 0) {
                tempProducts = tempProducts.filter((p) => selectedBattery.includes(p?.battery));
            }
            if (selectedCamera.length !== 0) {
                tempProducts = tempProducts.filter((p) => selectedCamera.includes(p?.camera));
            }
            if (selectedRam.length !== 0) {
                tempProducts = tempProducts.filter((p) => selectedRam.includes(p?.ram));
            }
            if (selectedDisplay.length !== 0) {
                tempProducts = tempProducts.filter((p) => selectedDisplay.includes(p?.display));
            }
            // filter by price
            tempProducts = tempProducts.filter((product) => product.price <= price);

            if (shipping) {
                tempProducts = tempProducts.filter((product) => product.shipping === true);
            }

            if (stars !== 0) {
                tempProducts = tempProducts.filter(
                    (product) => Math.round(product?.stars) === stars
                );
            }

            return { ...state, filtered_products: tempProducts };
        }

        case CLEAR_FILTERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    selectedCategory: [],
                    selectedBattery: [],
                    selectedCamera: [],
                    selectedDisplay: [],
                    selectedRam: [],
                    color: 'all',
                    stars: 0,
                    page: 20,
                    price: state.filters.max_price,
                    shipping: false,
                },
            };
        }

        case CLEAR_CATEGORY: {
            return { ...state, filters: { ...state.filters, selectedCategory: [] } };
        }

        case CLEAR_BATTERY: {
            return { ...state, filters: { ...state.filters, selectedBattery: [] } };
        }

        case CLEAR_CAMERA:
            return { ...state, filters: { ...state.filters, selectedCamera: [] } };

        case CLEAR_RAM_MEMORY:
            return { ...state, filters: { ...state.filters, selectedRam: [] } };

        case CLEAR_DISPLAY:
            return { ...state, filters: { ...state.filters, selectedDisplay: [] } };
    }
};

export default filter_reducer;
