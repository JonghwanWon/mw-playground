import { darken } from 'polished';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors } from '@src/theme/colors';

import { VariantType } from '../BaseButton';

const generateThemedCss = (variant: VariantType) => {
  return css`
    background-color: ${colors[variant]};
    border-color: ${darken(0.1, colors[variant])};
    color: #fff;
  `;
};

const buttonVariants: { [key in VariantType]: FlattenSimpleInterpolation } = {
  primary: generateThemedCss("primary"),
  secondary: generateThemedCss("secondary")
};

export { buttonVariants };
