

import React, { useState } from 'react';
import {Appbar, Menu, useTheme} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {DrawerHeaderProps, useDrawerStatus} from '@react-navigation/drawer';
import {useThemeContext} from '@contexts/ThemeContext';
import {GestureResponderEvent, Pressable} from 'react-native';
import {changeTheme} from '@utils/theme';
import { useTranslation } from 'react-i18next';

export default function CustomNavigationBar({
  navigation,
  route,
  options,
}: DrawerHeaderProps) {
  const theme = useTheme();
  const title = getHeaderTitle(options, route.name);
  const canGoBack = navigation?.canGoBack();
  const isDrawerOpen = useDrawerStatus();
  const {toggleTheme} = useThemeContext();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const {i18n} = useTranslation();
  return (
    <Appbar.Header>
      <Appbar.Action
        onPress={() => navigation.openDrawer()}
        icon={isDrawerOpen ? 'menu' : 'menu-open'}
      />
      {canGoBack ? (
        <Appbar.BackAction onPress={() => navigation?.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
      <Pressable
        onPress={(e: GestureResponderEvent) => {
          changeTheme(e, () => toggleTheme());
        }}>
        <Appbar.Action
          icon={theme?.dark ? 'moon-waxing-crescent' : 'white-balance-sunny'}
        />
      </Pressable>
      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="translate"
              onPress={openMenu}
            />
          }
          >
          <Menu.Item leadingIcon={'google-translate'} disabled={i18n.language === 'en'} onPress={() => {
            i18n?.changeLanguage('en');
          }} title="EN" />
          <Menu.Item leadingIcon={'google-translate'} disabled={i18n.language === 'ta'} onPress={() => {
            i18n?.changeLanguage('ta');
          }} title="TA" />
        </Menu>
    </Appbar.Header>
  );
}

