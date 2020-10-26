import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useSetCssVariable} from 'src/utils/cssVariables';
import classes from './Col.module.css';

export const Col = ({children, className, width}) => {
  const size = `${(width / 12) * 100}%`;
  const [, setRef] = useSetCssVariable('columnWidth', size);
  return (
    <div
      ref={setRef}
      className={classNames({
        [classes.col]: true,
        [className]: !!className,
      })}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
};

Col.defaultProps = {
  className: '',
  width: 1,
};
