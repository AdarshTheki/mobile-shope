import { useContext } from 'react';
import { ContextProvider } from './GlobalProvider';

// Create a custom hook to access the context
const GlobalContext = () => {
  return useContext(ContextProvider);
};

export default GlobalContext;
