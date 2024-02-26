import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_SUCCESS,
} from '../assets/action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: true };

        case SIDEBAR_CLOSE:
            return { ...state, isSidebarOpen: false };

        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };

        case GET_SINGLE_PRODUCT_SUCCESS: {
            const { id } = action.payload;
            const singleProduct = state.products.filter((product) => product.id === id);
            return { ...state, single_product: singleProduct };
        }
    }
};

export default products_reducer;
