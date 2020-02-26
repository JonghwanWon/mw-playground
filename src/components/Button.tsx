import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};
type ButtonProps = {
  onClick: (...args: any[]) => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
