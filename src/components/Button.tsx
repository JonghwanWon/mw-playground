import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => <button {...rest}>{children}</button>;

export default Button;
