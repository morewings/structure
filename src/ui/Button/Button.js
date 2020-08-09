import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Icon} from 'src/ui/Icon';
import {setCSSVariable} from 'src/utils/cssVariables';
import {useColors} from './useColors';
import classes from './Button.module.css';

export const Button = ({onClick, className, icon, text, type}) => {
  const ref = useRef();
  const color = useColors(type);
  setCSSVariable(ref.current, 'buttonColor', color);
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={classNames({
        [classes.button]: true,
        [className]: !!className,
      })}>
      <span className={classes.wrapper}>
        <Icon className={classes.icon} name={icon} />
        <span className={classes.name}>{text}</span>
      </span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['action']),
};

Button.defaultProps = {
  className: '',
  type: 'action',
};
