import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {Theme as NavigationTheme} from '@react-navigation/native/lib/typescript/src/types';
import {ColorSchemeName} from 'react-native';

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