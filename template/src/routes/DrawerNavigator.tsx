import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/HomeScreen';
import CustomNavigationBar from '@components/CustomeNavigationBar';
import CustomeDrawerContent from '@components/CustomeDrawerContent';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
     drawerContent={CustomeDrawerContent}
     screenOptions={{
      drawerStyle:{
        backgroundColor: theme?.colors?.background,
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      header: (props) => <CustomNavigationBar {...props} />,
    }}>
      <Drawer.Screen  name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
