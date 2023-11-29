import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalProvider } from './context/Global_Context.jsx';
import { ProductsProvider } from './context/Products_Context.jsx';
import { FilterProvider } from './context/Filter_Context.jsx';
import { CartProvider } from './context/Cart_Context.jsx';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </GlobalProvider>
  </React.StrictMode>
);
