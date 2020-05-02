import React from 'react';
import {Link} from 'gatsby';
import {Row, Col} from 'react-materialize';
import Board from 'src/components/Board/Board';
import Layout from '../components/Layout/Layout';
import Column from '../components/Column/Column';
import SEO from '../components/seo';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Board />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
