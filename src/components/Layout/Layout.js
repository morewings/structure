import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'src/ui/Grid';
import ModalManager from 'src/components/ModalManager/ModalManager';
import SmallScreenWarning from 'src/components/SmallScreenWarning';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import config from 'src/config';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import {useMatchMedia} from 'src/utils/matchMedia';
import './global.css';
import './variables.css';
import classes from './Layout.module.css';

const Layout = ({children}) => {
  const isEnoughSpace = useMatchMedia({minWidth: 1279});
  return (
    <div id={config.appId} className={classes.layout}>
      {isEnoughSpace ? (
        <Fragment>
          <Header siteTitle="Structure" />
          <Container className={classes.main}>{children}</Container>
          <Footer className={classes.footer} />
          <ModalManager />
        </Fragment>
      ) : (
        <SmallScreenWarning />
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
