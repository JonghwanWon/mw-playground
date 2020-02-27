import { darken } from 'polished';

// Primary color
const baseColors = {
  primary: "#5c6bc0",
  secondary: "#485b6f"
};

// Grayscale colors
const white = "#fff";
const grayscale = {
  gray90: darken(0.1, white),
  gray85: darken(0.25, white),
  gray75: darken(0.25, white),
  gray65: darken(0.35, white),
  gray60: darken(0.4, white),
  gray50: darken(0.5, white),
  gray35: darken(0.65, white),
  gray25: darken(0.75, white),
  gray15: darken(0.85, white)
};

export type Colors = typeof grayscale & typeof baseColors;

export const colors: Colors = {
  ...grayscale,
  ...baseColors
};
