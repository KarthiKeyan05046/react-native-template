import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import * as project from '../../package.json';
import { useTranslation } from 'react-i18next';
import { Button, useTheme } from 'react-native-paper';
import { useAuth } from '@contexts/AuthContext';

export interface ProfileScreen {}
const ProfileScreen: React.FC<ProfileScreen> = ({}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const {logout} = useAuth();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.welcomeMessage, {color: theme.colors.onBackground}]}>{t('status.version', {version: project.version})}</Text>
      <Button onPress={()=> logout()}>{t('auth.signout')}</Button>
    </SafeAreaView>
  );
};
export  const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  welcomeMessage: {
    fontSize: 20,
  },
});
export default ProfileScreen;

