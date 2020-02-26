import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

type HeroProps = {};

const Hero: React.FC<HeroProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default Hero;
