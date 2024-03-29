import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useLocalTheme} from 'css-vars-hook';

import classes from './Col.module.css';

export const Col = ({children, className, width, offset}) => {
  const columnWidth = `${(width / 12) * 100}%`;
  const marginLeft = `${(offset / 12) * 100}%`;
  const {LocalRoot} = useLocalTheme({marginLeft, columnWidth});
  return (
    <LocalRoot
      className={classNames({
        [classes.col]: true,
        [className]: !!className,
      })}>
      {children}
    </LocalRoot>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
};

Col.defaultProps = {
  className: '',
  width: 1,
  offset: 0,
};
