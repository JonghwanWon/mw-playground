import * as React from 'react';
import styled from 'styled-components';

import CustomLink from '@src/components/common/CustomLink';

const StyledHeader = styled.div``;

const StyledNav = styled.nav``;

type GlobalHeaderProps = {};

const GlobalHeader: React.FC<GlobalHeaderProps> = ({}) => (
  <StyledHeader>
    <StyledNav>
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/about">About</CustomLink>
    </StyledNav>
  </StyledHeader>
);

export default GlobalHeader;
