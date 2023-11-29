import { useContext } from 'react';
import { GlobalContext } from './Global_Context';

// Create a custom hook to access the context
const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
