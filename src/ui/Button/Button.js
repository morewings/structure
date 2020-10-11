import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Icon} from 'src/ui/Icon';
import {useSetCssVariable} from 'src/utils/cssVariables';
import {useColors} from './useColors';
import classes from './Button.module.css';

export const Button = ({onClick, className, icon, text, type}) => {
  const color = useColors(type);
  const [, setRef] = useSetCssVariable('buttonColor', color);
  return (
    <button
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
  type: PropTypes.oneOf(['action']),
};

Button.defaultProps = {
  className: '',
  type: 'action',
  text: '',
  icon: '',
};
