import React from 'react';
import Layout from 'src/components/Layout/Layout';
import {SEO} from 'src/components/SEO';
import Help from 'src/components/Help';

const HelpPage = () => (
  <Layout>
    <SEO title="Help" />
    <Help />
  </Layout>
);

export default HelpPage;
