import React from 'react';
import {
  DrawerContentComponentProps,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import DrawerHeader from '@components/DrawerHeader';
import DrawerFooter from '@components/DrawerFooter';

  const CustomeDrawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerHeader />
        <DrawerFooter />
      </DrawerContentScrollView>
    );
  };

  export default CustomeDrawerContent;
