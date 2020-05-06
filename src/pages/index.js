import React from 'react';
import {Link} from 'gatsby';
import Board from 'src/components/Board/Board';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Board />
  </Layout>
);

export default IndexPage;
