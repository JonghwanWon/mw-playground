import * as React from 'react';

import GlobalFooter from '@src/components/common/GlobalFooter';
import GlobalHeader from '@src/components/common/GlobalHeader';
import Helmet from '@src/components/common/Helmet';

type GlobalLayoutProps = {
  title?: string;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, title }) => (
  <>
    <Helmet title={title} />
    <GlobalHeader />
    {children}
    <GlobalFooter />
  </>
);

export default GlobalLayout;
