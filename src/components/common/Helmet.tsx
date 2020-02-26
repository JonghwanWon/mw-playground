import Head from 'next/head';
import * as React from 'react';

type HelmetProps = {
  title?: string;
};

const Helmet: React.FC<HelmetProps> = ({ title = "hello world!" }) => {
  return (
    <Head>
      <title>{title} :: playground</title>
    </Head>
  );
};

export default Helmet;
