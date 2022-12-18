import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useVariable} from 'css-vars-hook';

import {Icon} from '@/ui/Icon';
import {useColors} from '@/utils/buttonColors';

import classes from './Button.module.css';

export const Button = ({onClick, className, icon, text, type}) => {
  const color = useColors(type);
  const {setRef, style} = useVariable('buttonColor', color);
  return (
    <button
      style={style}
      ref={setRef}
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
    </button>
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
