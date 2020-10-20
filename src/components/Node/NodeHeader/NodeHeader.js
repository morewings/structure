import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'src/ui/Checkbox';
import {Icon} from 'src/ui/Icon';
import classes from './NodeHeader.module.css';

const NodeHeader = ({
  handleCheckboxChange,
  isDone,
  title,
  id,
  handleToggle,
  color,
  isOpen,
}) => {
  const icon = isOpen ? 'collapse' : 'expand';
  return (
    <header className={classes.header}>
      <Checkbox
        className={classes.checkbox}
        onChange={handleCheckboxChange}
        checked={isDone}
      />
      <h5 className={classes.title}>{title || id}</h5>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
      <div onClick={handleToggle} role="button">
        <Icon className={classes.toggleIcon} color={color} name={icon} />
      </div>
    </header>
  );
};

NodeHeader.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // TODO: fix the bug and change to enumerable
  color: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

NodeHeader.defaultProps = {
  color: '',
};

export default NodeHeader;
