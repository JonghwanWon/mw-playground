import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.gray75};
`;

const Devider = styled.hr``;

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => (
  <StyledFooter>
    <Devider />
  </StyledFooter>
);

export default Footer;
