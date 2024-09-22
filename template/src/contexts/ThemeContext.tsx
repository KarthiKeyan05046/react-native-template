import storage from '@services/storage';
import colors from '@theme/colors';
import React, { createContext, useState, useEffect, useContext, ReactNode, useMemo } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

interface ThemeContextProps {
  theme: ColorSchemeName;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>(systemTheme);

  useEffect(() => {
    const savedTheme = storage.getItem('theme');

    if (savedTheme) {setTheme(savedTheme as ColorSchemeName);}

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    storage.setItem('theme', newTheme);
  };

  const paperTheme = useMemo(() =>
    theme === 'dark'
    ? { ...MD3DarkTheme,
       colors: colors.dark,
       }
    : { ...MD3LightTheme,
      colors: colors.light,
    }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PaperProvider theme={paperTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
