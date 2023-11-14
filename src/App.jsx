import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <div className=' min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
