// AuthContext.tsx
import storage from '@services/storage';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const login = () => {
    setIsAuthenticated(true);
    storage.setItem('token', 'token');
  };
  const logout = () => {
    setIsAuthenticated(false);
    storage.removeItem('token');
  };
  const init = () => {
    const token = storage.getItem('token');
    if(token) {
      setIsAuthenticated(true);
      return;
    }
    setIsAuthenticated(false);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
