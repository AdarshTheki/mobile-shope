import { useContext } from 'react';
import { ProductContext } from './ProductProvider';

// Create a custom hook to access the context
const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
