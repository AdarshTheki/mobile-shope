import React from 'react';
import { AuthContext } from './Auth_Context';
import { CartContext } from './Cart_Context';
import { FilterContext } from './Filter_Context';
import { ProductsContext } from './Products_Context';
import { ReviewContext } from './Review_Context';

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
