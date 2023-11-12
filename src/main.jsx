import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import ProductProvider from './context/ProductProvider.jsx';
import { CartPage, NotFound, ProductPage, ProductDetailPage, HomePage } from './pages/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/product/:id', element: <ProductDetailPage /> },
      { path: '/carts', element: <CartPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
