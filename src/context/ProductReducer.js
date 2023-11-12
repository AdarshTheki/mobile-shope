import { v4 as uuidv4 } from 'uuid';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        allProducts: [...action.payload],
        filterProducts: [...action.payload],
      };

    case 'UPDATE_FILTER_VALUE': {
      const { name, value } = action.payload;
      const updatedFilters = { ...state.filters, [name]: value };
      return {
        ...state,
        filters: updatedFilters,
      };
    }

    case 'UPDATE_CHECKBOX': {
      const { name, checked } = action.payload;
      const updatedFilters = { ...state.filters, [name]: checked };
      return {
        ...state,
        filters: updatedFilters,
      };
    }

    case 'TOGGLE_CATEGORY': {
      const { category } = action.payload;
      const selectedCategory = state.filters.selectedCategories.includes(category)
        ? state.filters.selectedCategories.filter((cat) => cat !== category)
        : [...state.filters.selectedCategories, category];
      return {
        ...state,
        filters: { ...state.filters, selectedCategories: selectedCategory },
      };
    }

    case 'FILTER_PRODUCTS': {
      const { allProducts } = state;
      const {
        text,
        rating,
        price,
        selectedCategories,
        review,
        storage,
        battery,
        camera,
        processor,
      } = state.filters;
      const filteredProducts = allProducts.filter((product) => {
        const nameMatch = !text || product.name.toLowerCase().includes(text.toLowerCase());
        const categoryMatch =
          selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const storageMatch =
          !storage || product.storage.toLowerCase().includes(storage.toLowerCase());
        const batteryMatch = !battery || product.battery == battery;
        const cameraMatch = !camera || product.camera.toLowerCase().includes(camera.toLowerCase());
        const processorMatch = !processor || product.processor.toLowerCase()?.includes(processor);
        const ratingMatch = !rating || product.ratings >= rating;
        const priceMatch = !price || product.current_price >= price;
        const reviewMatch = !review || product.reviews >= review;
        return (
          nameMatch &&
          categoryMatch &&
          batteryMatch &&
          storageMatch &&
          ratingMatch &&
          cameraMatch &&
          processorMatch &&
          priceMatch &&
          reviewMatch
        );
      });
      return {
        ...state,
        filterProducts: filteredProducts,
      };
    }

    case 'CLEAR_ALL_FILTER': {
      return {
        ...state,
        filters: {
          selectedCategories: [],
          text: '',
          price: 0,
          rating: 0,
          review: 0,
          battery: 0,
          camera: '',
          processor: '',
          storage: '',
          delivery: false,
        },
      };
    }

    case 'CLEAR_ALL_CHECKBOX': {
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedCategories: [],
        },
      };
    }

    case 'ADD_TO_CART': {
      const { product } = action.payload;
      const {
        color,
        storage,
        RAM,
        ROM,
        id,
        name,
        reviews,
        stars,
        lunch_price,
        current_price,
        img_url,
      } = product;
      return {
        ...state,
        cartItems: state.cartItems.find((cart) => cart.id === product.id)
          ? state.cartItems.map((cart) =>
              cart.id === product.id
                ? {
                    ...cart,
                    color: color,
                    storage: RAM + ' RAM | ' + ROM + ' ROM',
                    count: cart.count + 1,
                  }
                : cart
            )
          : [
              ...state.cartItems,
              {
                color,
                storage,
                id,
                name,
                reviews,
                stars,
                lunch_price,
                current_price,
                img_url,
                count: 1,
              },
            ],
      };
    }

    // case 'ADD_TO_CART': {
    //   const { item } = action.payload;
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.find((cart) => cart.id === item?.id)
    //       ? state.cartItems.map((cart) =>
    //           cart.id === item?.id ? { ...cart, count: cart.count + 1 } : cart
    //         )
    //       : [...state.cartItems, { ...item, count: 1 }],
    //   };
    // }

    case 'REMOVE_FROM_CART': {
      const { id } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((cart) => cart?.id !== id),
      };
    }

    case 'CLEAR_ALL_CART':
      return { ...state, cartItems: [] };

    case 'INCREASE_QTY': {
      const { id } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((cart) =>
          cart?.id === id ? { ...cart, count: cart.count + 1 } : cart
        ),
      };
    }

    case 'DECREASE_QTY': {
      const { id } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((cart) =>
          cart?.id === id ? { ...cart, count: cart.count > 1 ? cart.count - 1 : 1 } : cart
        ),
      };
    }

    default:
      return state; // Return the current state if the action type is not recognized.
  }
};

export default ProductReducer;
