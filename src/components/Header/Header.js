import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'src/ui/Icon';
import {Container, Row, Col} from 'src/ui/Grid';
import {NavigationLink} from 'src/ui/NavigationLink';
import classes from './Header.module.css';

const Header = ({siteTitle}) => (
  <div className={classes.header}>
    <Container>
      <Row>
        <Col>
          <div className={classes.brand}>
            <Icon className={classes.logo} name="structure_logo" />
            <div className={classes.name}>{siteTitle}</div>
          </div>
        </Col>
        <Col lg={{offset: 4}}>
          <div className={classes.navigation}>
            <NavigationLink icon="board" title="Board" to="/" />
            <NavigationLink icon="help" title="Help" to="/help" />
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.githubLink}
              href="https://github.com/morewings/structure">
              <Icon name="github" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
