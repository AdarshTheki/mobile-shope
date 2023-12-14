import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context';
import { LoadingSpinner } from '../utils';

export default function ProtectedRoute({ children, redirect }) {
  const { user, loading } = useAuth();

  return loading ? <LoadingSpinner /> : user ? <Outlet /> : <Navigate to={redirect} replace />;
}
