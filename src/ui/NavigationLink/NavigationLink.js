import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'gatsby';
import {Icon} from 'src/ui/Icon';
import classes from './NavigationLink.module.css';

export const NavigationLink = ({title, to, icon, className}) => (
  <Link
    activeClassName={classes.active}
    className={classNames({
      [classes.navigationLink]: true,
      [className]: !!className,
    })}
    to={to}>
    <Icon className={classes.icon} name={icon} />
    <div className={classes.title}>{title}</div>
  </Link>
);

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

NavigationLink.defaultProps = {
  className: '',
};
