import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import * as project from '../../package.json';
import { useTranslation } from 'react-i18next';

export interface ProfileScreen {}
const ProfileScreen: React.FC<ProfileScreen> = ({  }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeMessage}>{t('version', {version: project.version})}</Text>
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

