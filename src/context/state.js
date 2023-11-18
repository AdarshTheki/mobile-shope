// Define your Initial Product State Here

export const initialState = {
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
