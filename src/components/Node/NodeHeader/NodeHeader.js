import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {useNodeColorValues} from '@/utils/nodeColors';
import {Checkbox} from '@/ui/Checkbox';
import {Icon} from '@/ui/Icon';

import classes from './NodeHeader.module.css';

const NodeHeader = ({handleCheckboxChange, isDone, title, id, handleToggle, color, isOpen, className}) => {
  const colorValue = useNodeColorValues(color);
  const icon = isOpen ? 'collapse' : 'expand';
  return (
    <header
      className={classNames({
        [classes.header]: true,
        [className]: !!className,
      })}>
      <Checkbox
        color={colorValue}
        className={classes.checkbox}
        onChange={handleCheckboxChange}
        checked={isDone}
      />
      <h5
        title={title}
        className={classNames({
          [classes.title]: true,
          [classes.shorten]: !isOpen,
        })}>
        {title || id}
      </h5>
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
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

NodeHeader.defaultProps = {
  color: '',
  className: '',
};

export default NodeHeader;
