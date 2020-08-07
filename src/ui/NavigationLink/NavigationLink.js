/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {Icon} from 'src/ui/Icon';
import classes from './NavigationLink.module.css';

export const NavigationLink = ({title, to, icon}) => {
  return (
    <Link className={classes.navigationLink} to={to}>
      <Icon className={classes.icon} name={icon} />
      <div className={classes.title}>{title}</div>
    </Link>
  )
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}