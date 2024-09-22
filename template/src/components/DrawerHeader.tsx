import { useThemeContext } from '@contexts/ThemeContext';
import spacing from '@theme/spacing';
import { changeTheme } from '@utils/theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import { Appbar, Icon, Menu, useTheme } from 'react-native-paper';

export interface IDrawerHeader {}
const DrawerHeader:React.FC<IDrawerHeader> = () => {
  const {toggleTheme} = useThemeContext();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const {i18n} = useTranslation();
  return (
    <View style={styles.headerConatainer}>
      <Pressable
        key={'theme button'}
        onPress={(e: GestureResponderEvent) => {
          changeTheme(e, () => toggleTheme());
        }}>
        <Icon
          source={theme?.dark ? 'moon-waxing-crescent' : 'white-balance-sunny'}
          size={30}
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
    </View>
  );
};

const styles = StyleSheet.create({

    headerConatainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: spacing.lg,
      justifyContent: 'flex-end',
      height: 100,
    },

});

export default DrawerHeader;
