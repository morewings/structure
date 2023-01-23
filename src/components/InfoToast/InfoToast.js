import React from 'react';
import PropTypes from 'prop-types';

import {Toast} from '@/ui/Toast';
import {Icon} from '@/ui/Icon';
import {useActionTimer} from '@/utils/useActionTimer';

import classes from './InfoToast.module.css';

export const InfoToast = ({text, onClose}) => {
  const handleClose = () => {
    onClose();
  };
  useActionTimer(handleClose, 10);
  return (
    <Toast className={classes.toast}>
      <div className={classes.iconWrapper}>
        <Icon name="info" color="white" className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>{text}</div>
      <div className={classes.closeWrapper} role="button" onClick={handleClose}>
        <Icon name="close" color="white" className={classes.close} />
      </div>
    </Toast>
  );
};

InfoToast.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
