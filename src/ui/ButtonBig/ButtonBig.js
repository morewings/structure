import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useLocalTheme} from 'css-vars-hook';

import {Icon} from '@/ui/Icon';
import {useColors} from '@/utils/buttonColors';

import classes from './ButtonBig.module.css';

export const ButtonBig = ({icon, type, className, onClick, children, title}) => {
  const color = useColors(type);
  const {LocalRoot} = useLocalTheme();
  return (
    <LocalRoot
      as="button"
      theme={{buttonColor: color}}
      title={title}
      type="button"
      onClick={onClick}
      className={classNames({
        [classes.buttonBig]: true,
        [className]: !!className,
      })}>
      <Icon className={classes.icon} name={icon} />
      {children && children}
    </LocalRoot>
  );
};

ButtonBig.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['action', 'danger', 'confirm']),
  children: PropTypes.node,
};

ButtonBig.defaultProps = {
  type: 'action',
  className: '',
  children: null,
};
