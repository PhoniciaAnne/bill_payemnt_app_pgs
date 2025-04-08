// src/components/common/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in at all
    return <Navigate to="/signin" replace />;
  }

  // If the user's role is in the allowedRoles array, render children
  if (allowedRoles.includes(user.role)) {
    return children;
  }

  // Otherwise, user is logged in but does not have the right role
  return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Unauthorized</h1>;
};

export default ProtectedRoute;
