import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthGaurd from '@routes/AuthGaurd';

export interface MainNavigatorProps {}
const MainNavigator: React.FC<MainNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <AuthGaurd />
    </NavigationContainer>
  );
};

export default MainNavigator;
