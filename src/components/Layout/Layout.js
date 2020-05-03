import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {Container} from 'react-bootstrap';
import classes from './Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container as="main" className={classes.main}>
        {children}
      </Container>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
