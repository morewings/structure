import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Icon} from '@/ui/Icon';
import {Container} from '@/ui/Grid';
import {NavigationLink} from '@/components/NavigationLink';

import classes from './Header.module.css';

export const Header = ({siteTitle}) => (
  <div className={classes.header}>
    <Container>
      <div className={classes.headerContent}>
        <div className={classes.brand}>
          <Icon className={classes.logo} name="structure_logo" />
          <div className={classes.name}>{siteTitle}</div>
        </div>
        <div className={classes.navigation}>
          <NavigationLink className={classes.navItem} icon="board" title="Board" href="/" />
          <NavigationLink className={classes.navItem} icon="help" title="Help" href="/help" />
          <a
            rel="noreferrer"
            target="_blank"
            className={classNames({
              [classes.githubLink]: true,
              [classes.navItem]: true,
            })}
            href="https://github.com/morewings/structure">
            <Icon name="github" />
          </a>
        </div>
      </div>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
