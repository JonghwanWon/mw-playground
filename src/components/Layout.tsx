import Head from 'next/head';
import * as React from 'react';

import GlobalFooter from '@src/components/common/GlobalFooter';
import GlobalHeader from '@src/components/common/GlobalHeader';
import { seo } from '@src/config.seo';

type Props = {
  title?: string;
  description?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "title",
  description
}) => (
  <div>
    <Head>
      <title>{title} :: playground</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content={seo.author} />
      <meta name="description" content={description || seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="title" content={seo.siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.siteImage} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.siteTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content={seo.siteLargeImage} />
      <meta name="twitter:site" content={seo.siteImage} />
      <meta name="twitter:title" content={seo.siteTitle} />
      <meta name="twitter:description" content={seo.description} />
    </Head>
    <GlobalHeader />
    {children}
    <GlobalFooter />
  </div>
);

export default Layout;
