import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {Container} from 'src/ui/Grid';
import FloatingActions from 'src/components/FloatingActions';
import ModalManager from 'src/components/ModalManager/ModalManager';
import config from 'src/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import './variables.css';
import classes from './Layout.module.css';

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
    <div id={config.appId} className={classes.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container as="main" className={classes.main}>
        {children}
      </Container>
      <Footer className={classes.footer} />
      <FloatingActions />
      <ModalManager />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
