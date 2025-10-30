import { createTheme } from '@shopify/restyle';

export const palette = {
  greenLight: '#DFF7E2',
  greenHoneydew: '#F1FFF3',
  greenPrimary: '#00D09E',
  greenCyprus: '#0E3E3E',
  greenDarkLight: '#093030',
  greenDark: '#052224',

  blueLight: '#6DB6FE',
  blueVivid: '#3299FF',
  blueOcean: '#0068FF',

  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  black: '#031314',
  white: '#F0F2F3',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.greenCyprus,
    background: palette.greenHoneydew,
    backgroundContrast: palette.greenDarkLight,

    success: palette.greenPrimary,
    successLight: palette.greenLight,

    error: palette.redError,
    errorLight: palette.redErrorLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s36: 36,
    s40: 40,
    s44: 44,
    s48: 48,
    s52: 52,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s44: 44,
    s48: 48,
    s52: 52,
    s56: 56,
    s60: 60,
    s64: 64,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
