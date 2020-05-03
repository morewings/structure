import React from 'react';
import {Link} from 'gatsby';
import Board from 'src/components/Board/Board';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Board />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
