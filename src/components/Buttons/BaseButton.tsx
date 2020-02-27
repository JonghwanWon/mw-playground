import * as React from 'react';
import styled from 'styled-components';

import { buttonVariants, VariantType } from './theme/variantStyles';

type HTMLButtonType = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
>;

export type BaseButtonProps = HTMLButtonType & {
  variant?: VariantType;
};

type StyledBaseButtonProps = {
  variant: VariantType;
};

export const BaseButton = styled.button<StyledBaseButtonProps>`
  position: relative;
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 14px;
  overflow: hidden;
  transition: all ease-in-out 0.15s;

  ${({ variant }) => buttonVariants[variant]};
`;
