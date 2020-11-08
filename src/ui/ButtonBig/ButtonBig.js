import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Icon} from 'src/ui/Icon';
import {useColors} from 'src/utils/buttonColors';
import {useSetCssTheme} from 'src/utils/cssVariables';
import classes from './ButtonBig.module.css';

export const ButtonBig = ({
  icon,
  type,
  className,
  onClick,
  children,
  title,
}) => {
  const buttonColor = useColors(type);
  // const [, setRef] = useSetCssVariable('buttonColor', color);
  const {setRef, style, setVariable} = useSetCssTheme({buttonColor});
  const handleClick = () => {
    console.log('click');
    setVariable('buttonColor', 'red');
  };
  return (
    <button
      title={title}
      ref={setRef}
      type="button"
      onClick={handleClick}
      className={classNames({
        [classes.buttonBig]: true,
        [className]: !!className,
      })}>
      <Icon className={classes.icon} name={icon} />
      {children && children}
    </button>
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
