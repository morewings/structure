import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'gatsby';
import {Icon} from 'src/ui/Icon';
import classes from './Header.module.css';

const Header = ({siteTitle}) => (
  <div className={classes.header}>
    <Icon className={classes.logo} name="structure_logo" />
    <span className={classes.name}>Structure</span>

  </div>
);

// <Navbar bg="light" variant="light" expand="lg">
//   <Navbar.Brand as={Link} to="/">
//     {siteTitle}
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
