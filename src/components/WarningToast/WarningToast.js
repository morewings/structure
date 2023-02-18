import React from 'react';
import PropTypes from 'prop-types';

import {Toast} from '@/ui/Toast';
import {Icon} from '@/ui/Icon';

import classes from './WarningToast.module.css';

export const WarningToast = ({text, onClose}) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Toast className={classes.toast}>
      <div className={classes.iconWrapper}>
        <Icon name="info" color="red" className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>{text}</div>
      <div className={classes.closeWrapper} role="button" onClick={handleClose}>
        <Icon name="close" color="white" className={classes.close} />
      </div>
    </Toast>
  );
};

WarningToast.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
