import {
  LOAD_PRODUCTS,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../action';

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

    case FILTER_PRODUCTS: {
      const { all_products } = state;
      const { text, stars, category, battery, color, price, shipping } = state.filters;
      let tempProducts = [...all_products];
      if (text) {
        tempProducts = tempProducts.filter((product) => product.name.toLowerCase().includes(text));
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter((product) => product.category === category);
      }
      if (battery !== 'all') {
        tempProducts = tempProducts.filter((product) => product.battery == battery);
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }
      // filter by price
      tempProducts = tempProducts.filter((product) => product.price <= price);
      // filter by shipping
      if (shipping) {
        tempProducts = tempProducts.filter((product) => product.shipping === true);
      }
      if (stars !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          if (stars == 4) {
            return product.stars <= 4;
          } else if (stars == 4.2) {
            return product.stars > 4 && product.stars <= 4.2;
          } else if (stars == 4.4) {
            return product.stars > 4.2 && product.stars <= 4.4;
          } else if (stars == 4.6) {
            return product.stars > 4.6 && product.stars <= 5;
          }
        });
      }
      return { ...state, filtered_products: tempProducts };
    }
    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          battery: 'all',
          category: 'all',
          color: 'all',
          stars: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }
  }
};

export default filter_reducer;
