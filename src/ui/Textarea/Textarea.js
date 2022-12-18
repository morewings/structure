import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Textarea.module.css';

export const Textarea = ({id, onChange, value, className, maxLength}) => {
  const rows = 3;
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <textarea
      maxLength={maxLength}
      value={value}
      onChange={handleChange}
      className={classNames({
        [classes.textarea]: true,
        [className]: !!className,
      })}
      id={id}
      rows={rows}
    />
  );
};

Textarea.propTypes = {
  id: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  id: '',
  value: '',
  className: '',
  maxLength: '',
};
