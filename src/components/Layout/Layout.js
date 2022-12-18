import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {Container} from '@/ui/Grid';
import ModalManager from '@/components/ModalManager/ModalManager';
import SmallScreenWarning from '@/components/SmallScreenWarning';
import Footer from '@/components/Footer';
import config from '@/config';
import 'the-new-css-reset/css/reset.css';
import {useMatchMedia} from '@/utils/matchMedia';
import {useVersionNumber} from '@/utils/useVersionNumber';
import {Header} from '@/components/Header';

import classes from './Layout.module.css';

export const Layout = ({children}) => {
  useVersionNumber();
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
