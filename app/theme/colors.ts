const palette = {
  neutral100: '#FFFFFF',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral700: '#3C3836',
  neutral900: '#000000',

  accent500: '#A1D2E1',

  angry100: '#F2D6CD',
  angry500: '#C03403',
} as const;

export const defaultColors = {
  palette,

  textPrimary: palette.neutral900,
  textSecondary: palette.neutral700,

  backgroundPrimary: palette.neutral100,
  backgroundSecondary: palette.neutral300,

  border: palette.neutral400,

  separator: palette.neutral300,

  error: palette.angry500,
  errorBackground: palette.angry100,

  accent: palette.accent500,
  onAccent: palette.neutral100,
};

export const darkColors = {
  ...defaultColors, // TODO: replace it on day with an actual dark colors
} as const;
