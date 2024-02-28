import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    AuthProvider,
    ProductsProvider,
    FilterProvider,
    CartProvider,
    ReviewProvider,
    OrderProvider,
} from './context';

import App from './App';

import './assets/style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <OrderProvider>
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
    </OrderProvider>
);
