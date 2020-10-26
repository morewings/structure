import React from 'react';
import Board from 'src/components/Board/Board';
import FloatingActions from 'src/components/FloatingActions';
import Layout from '../components/Layout/Layout';
import {SEO} from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Board" />
    <Board />
    <FloatingActions />
  </Layout>
);

export default IndexPage;
