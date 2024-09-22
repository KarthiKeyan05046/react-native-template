import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigator from '@routes/MainNavigator';
import {AuthProvider} from '@contexts/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemeProvider } from '@contexts/ThemeContext';
// import colors from '@theme/colors';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <MainNavigator />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
