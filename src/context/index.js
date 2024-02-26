import React from 'react';
import { AuthContext, AuthProvider } from './Auth_Context';
import { CartContext, CartProvider } from './Cart_Context';
import { FilterContext, FilterProvider } from './Filter_Context';
import { ProductsContext, ProductsProvider } from './Products_Context';
import { ReviewContext, ReviewProvider } from './Review_Context';

export { AuthProvider, CartProvider, FilterProvider, ProductsProvider, ReviewProvider };

export const useReview = () => {
    const context = React.useContext(ReviewContext);
    if (!context) {
        throw new Error('useReview must be used within an ReviewProvider');
    }
    return context;
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within an CartProvider');
    }
    return context;
};

export const useFilter = () => {
    const context = React.useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within an FilterProvider');
    }
    return context;
};

export const useProducts = () => {
    const context = React.useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within an ProductsProvider');
    }
    return context;
};
