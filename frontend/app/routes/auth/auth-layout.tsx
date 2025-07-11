import React from 'react'
import { Navigate, Outlet } from 'react-router';

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default AuthLayout;

function useAuth(): { isAuthenticated: any; isLoading: any; } {
  throw new Error('Function not implemented.');
}

