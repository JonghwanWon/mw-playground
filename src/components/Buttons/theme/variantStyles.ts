import { darken } from 'polished';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors } from '@src/theme/colors';

export type VariantType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "focus"
  | "alt"
  | "light"
  | "dark"
  | "link";

export const variantTypes: Array<VariantType> = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "focus",
  "alt",
  "light",
  "dark",
  "link"
];

const generateColor = (variant: Exclude<VariantType, "link">) => {
  return css`
    background-color: ${colors[variant]};
    border-color: ${darken(0.1, colors[variant])};
  `;
};

const buttonVariants: { [key in VariantType]: FlattenSimpleInterpolation } = {
  primary: css`
    ${generateColor("primary")};
    color: #fff;
  `,
  secondary: css`
    ${generateColor("secondary")};
    color: #fff;
  `,
  success: css`
    ${generateColor("success")};
    color: #fff;
  `,
  info: css`
    ${generateColor("info")};
    color: #fff;
  `,
  warning: css`
    ${generateColor("warning")};
    color: #212529;
  `,
  danger: css`
    ${generateColor("danger")};
    color: #fff;
  `,
  focus: css`
    ${generateColor("focus")};
    color: #fff;
  `,
  alt: css`
    ${generateColor("alt")};
    color: #fff;
  `,
  light: css`
    ${generateColor("light")};
    color: #212529;
  `,
  dark: css`
    ${generateColor("dark")};
    color: #fff;
  `,
  link: css`
    background-color: transparent;
    border-color: transparent;
    color: ${colors.primary};
  `
};

export { buttonVariants };
