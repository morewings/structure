import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@/ui/Icon';

export const Checkbox = ({className, checked, onChange, color}) => {
  const icon = checked ? 'checkbox-checked' : 'checkbox-unchecked';
  const handleClick = () => {
    onChange(!checked);
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div className={className} onClick={handleClick} role="button">
      <Icon color={color} role="button" name={icon} />
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  color: '',
  className: '',
};
