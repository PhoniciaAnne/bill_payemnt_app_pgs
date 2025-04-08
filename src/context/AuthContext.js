// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  // For demonstration, store user info, roles, and isAuthenticated in state
  const [user, setUser] = useState(null); 
  // user = { role: 'admin' | 'biller' | 'consumer', name: ... etc. }

  const login = (role, name) => {
    // Real-world: do your API call, validate user, store token, etc.
    setUser({ role, name });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;
  
  // Values provided by context
  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
