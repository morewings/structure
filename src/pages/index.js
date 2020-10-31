import React from 'react';
import Board from 'src/components/Board/Board';
import FloatingActions from 'src/components/FloatingActions';
import Layout from 'src/components/Layout/Layout';
import {SEO} from 'src/components/SEO';
import ClientOnly from 'src/components/ClientOnly';

const IndexPage = () => (
  <Layout>
    <SEO title="Board" />
    <ClientOnly>
      <Board />
      <FloatingActions />
    </ClientOnly>
  </Layout>
);

export default IndexPage;
