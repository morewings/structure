/*eslint-disable*/
import React from 'react';
import {Navbar, Icon, NavItem} from 'react-materialize';

const Header = ({siteTitle}) => (
  <div>
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#">
          {siteTitle}
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}>
      <NavItem href="">Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  </div>
);

export default Header;
