import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {Theme as NavigationTheme} from '@react-navigation/native/lib/typescript/src/types';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {MD3LightTheme} from 'react-native-paper';

import {darkColors, defaultColors} from './colors.ts';
import {spacing} from './spacing.ts';

const sharedTheme = {
  spacing,
} as const;

const defaultTheme = {
  ...sharedTheme,
  colors: defaultColors,
} as const;

const darkTheme = {
  ...sharedTheme,
  colors: darkColors,
} as const;

export function useTheme() {
  return getTheme(useColorScheme());
}

export const getTheme = (colorSchemaName: ColorSchemeName) => {
  switch (colorSchemaName) {
    case 'dark':
      return darkTheme;
    default:
      return defaultTheme;
  }
};

export const getNavigationTheme = (
  colorSchemaName: ColorSchemeName,
): NavigationTheme => ({
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: getTheme(colorSchemaName).colors.backgroundPrimary,
  },
  dark: colorSchemaName === 'dark',
});

// TODO: Dark theme support
export const getPaperTheme = (colorSchemaName: ColorSchemeName): MD3Theme => {
  const theme = getTheme(colorSchemaName);

  return {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: theme.colors.primary,
      onPrimary: theme.colors.onPrimary,
      background: theme.colors.backgroundPrimary,
    },
  };
};
