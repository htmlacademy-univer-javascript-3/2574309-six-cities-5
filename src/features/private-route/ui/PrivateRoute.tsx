import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = false;

export const PrivateRoute: React.FC = () => {
  if (!isAuthenticated) {
    return <Navigate to={'/login'} />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }
};
