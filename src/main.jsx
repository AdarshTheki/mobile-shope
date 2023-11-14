import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import ProductProvider from './context/ProductProvider.jsx';
import {
  OrderPayment,
  OrderSuccess,
  OrderTrack,
  ShoppingCart,
  NotFound,
  ProductPage,
  ProductDetailPage,
  HomePage,
} from './pages/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/product/:id', element: <ProductDetailPage /> },
      { path: '/shopping-cart', element: <ShoppingCart /> },
      { path: '/order-payment', element: <OrderPayment /> },
      { path: '/order/success/:orderId', element: <OrderSuccess /> },
      { path: '/order/track/:orderId', element: <OrderTrack /> },
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
