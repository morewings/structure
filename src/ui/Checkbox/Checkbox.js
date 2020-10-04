import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../Icon';

export const Checkbox = props => {
  const icon = props.checked ? 'checkbox-checked' : 'checkbox-unchecked';
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div onClick={props.onChange} role="button">
      <Icon name={icon} />
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
