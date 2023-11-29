import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContext from './context/useGlobalContext';
import { getCurrentUser } from './appwrite/authService';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import {
  ProtectedRoute,
  OrderPayment,
  OrderSuccess,
  OrderTrack,
  ShoppingCart,
  NotFound,
  ProductPage,
  ProductDetail,
  HomePage,
  Login,
  Register,
  Profile,
} from './pages/index';

import Loading from './utils/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const { login, logout } = GlobalContext();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          login(user);
          toast.success('successfully login user');
        } else {
          logout();
        }
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {!loading ? (
        <BrowserRouter>
          <Header />
          <div style={{ minHeight: '90vh' }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route element={<ProtectedRoute redirect='/login' />}>
                <Route path='products' element={<ProductPage />} />
                <Route path='product/:id' element={<ProductDetail />} />
                <Route path='shopping-cart' element={<ShoppingCart />} />
                <Route path='order-payment' element={<OrderPayment />} />
                <Route path='order-success' element={<OrderSuccess />} />
                <Route path='order-track/:orderId' element={<OrderTrack />} />
                <Route path='profile' element={<Profile />} />
              </Route>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Toaster />
          <Footer />
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default App;
