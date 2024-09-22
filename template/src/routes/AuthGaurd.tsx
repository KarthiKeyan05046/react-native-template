import React from 'react';
import { useAuth } from '@contexts/AuthContext';
import AppNavigator from '@routes/AppNavigator';
import AuthNavigator from '@routes/AuthNavigator';

export interface AuthGaurdProps {}
const AuthGaurd: React.FC<AuthGaurdProps> = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default AuthGaurd;
