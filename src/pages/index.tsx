import { NextPage } from 'next';
import * as React from 'react';

import Hero from '@src/components/Hero';
import { GlobalLayout } from '@src/components/layouts';

type HomeProps = {};

const Home: NextPage<HomeProps> = ({}) => (
  <GlobalLayout title="Home">
    <Hero>hi</Hero>
  </GlobalLayout>
);

Home.getInitialProps = async ({}) => {
  try {
    return {};
  } catch (err) {
    return { errors: err.message };
  }
};

export default Home;
