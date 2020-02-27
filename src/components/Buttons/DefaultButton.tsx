import * as React from 'react';
import styled from 'styled-components';

import { BaseButtonProps, BaseButton } from './BaseButton';

const StyledButton = styled(BaseButton)``;

type DefaultButtonProps = BaseButtonProps & {};

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  type = "DefaultButton",
  variant = "primary",
  ...rest
}) => (
  <StyledButton variant={variant} {...rest}>
    {children}
  </StyledButton>
);

export default DefaultButton;
