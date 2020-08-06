import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Icon = ({name, className}) => (
  <i
    className={classNames({
      [className]: !!className,
      [`icon-${name}`]: true,
    })}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};
