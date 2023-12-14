import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './context/Auth_Context.jsx';
import { ProductsProvider } from './context/Products_Context.jsx';
import { FilterProvider } from './context/Filter_Context.jsx';
import { CartProvider } from './context/Cart_Context.jsx';
import { ReviewProvider } from './context/Review_Context.jsx';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <ReviewProvider>
              <App />
            </ReviewProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>
);
