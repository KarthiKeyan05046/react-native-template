import * as React from 'react';
import ProfileScreen from '@screens/ProfileScreen';
import DrawerNavigator from '@routes/DrawerNavigator';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {Icon} from 'react-native-paper';

const AppNavigator = () => {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'home', title: t('home'), focusedIcon: 'home', unfocusedIcon: 'home-outline'},
  //   { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  // ]);
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator shifting labeled={false}>
      <Tab.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused}) => (
            <Icon
              color={color}
              size={25}
              source={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
        name="TabHome"
        component={DrawerNavigator}
      />
      <Tab.Screen
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, focused}) => <Icon
            color={color}
            size={25}
            source={focused ? 'account' : 'account-outline'}
          />,

      }}
      name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
