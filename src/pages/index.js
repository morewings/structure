import React from 'react';
import {Link} from 'gatsby';
import {Row, Col} from 'react-materialize';
import Layout from '../components/Layout/Layout';
import Column from '../components/Column/Column';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col s={4}>
        <Column />
      </Col>
    </Row>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
