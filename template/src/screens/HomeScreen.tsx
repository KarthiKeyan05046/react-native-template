import { SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import * as project from '../../package.json';
import { Text, useTheme } from 'react-native-paper';

export interface HomeScreen {
  t: TFunction
}
const HomeScreen: React.FC<HomeScreen> = ({ t }) => {

  const themeColors = useTheme();
  return (

    <SafeAreaView style={[styles.container, {
      backgroundColor: themeColors.colors.background,
    }]}>
    <Text style={[styles.welcomeMessage, {color: themeColors.colors.onBackground}]}>{t('status.welcome', {appName: project.name})}</Text>
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
export default withTranslation()(HomeScreen);

