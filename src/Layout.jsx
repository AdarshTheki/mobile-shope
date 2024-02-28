import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage';
import Protected from './pages/ProtectedRoute';
import NoFound from './pages/PageNotFound';
import Header from './components/Common/HeaderSection';
import Footer from './components/Common/FooterSection';
import { LoadingSpinner } from './utils';

const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const OrderSuccess = React.lazy(() => import('./pages/OrderSuccess'));
const OrderTrackDetail = React.lazy(() => import('./pages/OrderTrackDetail'));
const OrderTrack = React.lazy(() => import('./pages/OrderTrack'));
const ShoppingCart = React.lazy(() => import('./pages/ShoppingCart'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const Login = React.lazy(() => import('./pages/LoginPage'));
const Register = React.lazy(() => import('./pages/RegisterPage'));
const Profile = React.lazy(() => import('./pages/ProfilePage'));

export default function Layout() {
    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <BrowserRouter>
                <Header />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NoFound />} />
                        <Route path='products' element={<ProductPage />} />
                        <Route path='product/:id' element={<ProductDetail />} />
                        <Route path='shopping-cart' element={<ShoppingCart />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />

                        <Route element={<Protected redirect='/login' />}>
                            <Route path='order-success' element={<OrderSuccess />} />
                            <Route path='order-track' element={<OrderTrack />} />
                            <Route path='order-track/:orderId' element={<OrderTrackDetail />} />
                            <Route path='profile' element={<Profile />} />
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </React.Suspense>
    );
}
