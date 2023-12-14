/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/HeaderSection';
import Footer from './components/common/FooterSection';
import { useAuth } from './context';
import { LoadingSpinner } from './utils';
import {
  ProtectedRoute,
  OrderPayment,
  OrderSuccess,
  OrderTrackDetail,
  OrderTrack,
  ShoppingCart,
  NotFound,
  ProductPage,
  ProductDetail,
  HomePage,
  Login,
  Register,
  Profile,
} from './pages';

const App = () => {
  const { login, loading } = useAuth();

  React.useEffect(() => {
    login();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <BrowserRouter>
          <Header />
          <div style={{ minHeight: '90vh' }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='products' element={<ProductPage />} />
              <Route path='product/:id' element={<ProductDetail />} />
              <Route path='shopping-cart' element={<ShoppingCart />} />
              <Route element={<ProtectedRoute redirect='/login' />}>
                <Route path='order-payment' element={<OrderPayment />} />
                <Route path='order-success' element={<OrderSuccess />} />
                <Route path='order-track' element={<OrderTrack />} />
                <Route path='order-track/:orderId' element={<OrderTrackDetail />} />
                <Route path='profile' element={<Profile />} />
              </Route>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};
export default App;
