import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function ProtectedRoute({ children, redirect = '/login' }) {
  const { auth } = GlobalContext();

  if (!auth?.userData) {
    return <Navigate to={redirect} replace />;
  }

  return children ? children : <Outlet />;
}
