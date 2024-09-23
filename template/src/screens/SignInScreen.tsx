import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@contexts/AuthContext';

export interface SignInScreenProps {}
const SignInScreen:React.FC<SignInScreenProps> = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {login} = useAuth();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <View style={styles.formContainer}>
        <Text style={{color: theme.colors.onBackground}}>{t('auth.signin')}</Text>
        <TextInput mode="outlined" placeholder={t('auth.email')} />
        <TextInput secureTextEntry mode="outlined" placeholder={t('auth.password')} />
        <Button onPress={login}>{t('auth.signin')}</Button>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 10,
    gap: 20,
  },
});

export default SignInScreen;
