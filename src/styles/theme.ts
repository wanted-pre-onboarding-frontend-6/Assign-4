import { css, DefaultTheme } from 'styled-components';

const palette = {
  // Primary
  mainColor: '#ffffff',
  subColor: '#000000',
  fontColor: '#0969DA',
  fontSubColor: '#999999',
  error: '#EB5757',
  subError: '#FFBA52',
} as const;

const fontSize = {
  small: '12px',
  medium: '14px',
  large: '16px',
  xLarge: '20px',
  xxLarge: '24px',
  xxxLarge: '32px',
} as const;

const fontWeight = {
  thin: '100',
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

const lineHeight = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '28px',
} as const;

export type PaletteTypes = typeof palette;
export type PaletteKeyTypes = keyof typeof palette;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type LineHeightTypes = typeof lineHeight;

const theme: DefaultTheme = {
  palette,
  fontSize,
  fontWeight,
  lineHeight,
};

export default theme;
