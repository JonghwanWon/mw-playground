import Link from 'next/link';
import * as React from 'react';

type CustomLinkProps = {
  href: string;
  as?: string;
};

const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
  children,
  ...rest
}) => (
  <Link {...rest}>
    <a>{children}</a>
  </Link>
);

export default CustomLink;
