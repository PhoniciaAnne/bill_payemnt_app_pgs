import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles.includes(user.role)) {
    return children;
  }

  return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Unauthorized</h1>;
};

export default ProtectedRoute;
