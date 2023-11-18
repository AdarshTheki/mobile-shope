import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';
import { getCurrentUser } from './appwrite/authService';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {
  ProtectedRoute,
  Checkout,
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

const App = () => {
  const { login, logout } = GlobalContext();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          login(user);
        } else {
          logout();
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
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
                <Route path='order-payment' element={<Checkout />} />
                <Route path='order/success/:orderId' element={<OrderSuccess />} />
                <Route path='order/track/:orderId' element={<OrderTrack />} />
                <Route path='profile' element={<Profile />} />
              </Route>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      ) : (
        <h2 className='text-center mt-10'>Loading page...</h2>
      )}
    </>
  );
};
export default App;
