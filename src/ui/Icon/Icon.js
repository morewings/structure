import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'src/ui/Icon/Icons.css';

export const Icon = ({name, className}) => {
  return (
    <i
      className={classNames({
        [className]: !!className,
        [`icon-${name}`]: true,
      })}
    />
  )
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};
