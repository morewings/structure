import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Icon} from '@/ui/Icon';

import classes from './NavigationLink.module.css';

export const NavigationLink = forwardRef(({title, href, icon, className, isActive}, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      className={classNames({
        [classes.navigationLink]: true,
        [classes.active]: isActive,
        [className]: !!className,
      })}>
      <Icon className={classes.icon} name={icon} />
      <div className={classes.title}>{title}</div>
    </a>
  );
});

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

NavigationLink.defaultProps = {
  className: '',
  isActive: false,
  href: '',
};
