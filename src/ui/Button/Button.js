import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useLocalTheme} from 'css-vars-hook';

import {Icon} from '@/ui/Icon';
import {useColors} from '@/utils/buttonColors';

import classes from './Button.module.css';

export const Button = ({onClick, className, icon, text, type}) => {
  const color = useColors(type);
  const {LocalRoot} = useLocalTheme({buttonColor: color}, 'button');
  return (
    <LocalRoot
      type="button"
      onClick={onClick}
      className={classNames({
        [classes.button]: true,
        [className]: !!className,
      })}>
      <span className={classes.wrapper}>
        {icon && <Icon className={classes.icon} name={icon} />}
        {text && <span className={classes.name}>{text}</span>}
      </span>
    </LocalRoot>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['action', 'danger', 'confirm']),
};

Button.defaultProps = {
  className: '',
  type: 'action',
  text: '',
  icon: '',
};
