import { NextPage } from 'next';
import * as React from 'react';

import Hero from '@src/components/Hero';
import Layout from '@src/components/Layout';

type MainProps = {};

const Main: NextPage<MainProps> = ({}) => (
  <Layout title="playground">
    <Hero>hi</Hero>
  </Layout>
);

export default Main;
