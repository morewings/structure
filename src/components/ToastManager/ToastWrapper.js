import React from 'react';
import PropTypes from 'prop-types';

import {useToastActions, useToastInfo} from '@/features/toast';

import {useToastComponent} from './useToastComponent';
import classes from './ToastWrapper.module.css';

export const ToastWrapper = ({id, isOpen}) => {
  const {closeToast} = useToastActions();
  const {toastType, toastProps} = useToastInfo(id);
  const ToastComponent = useToastComponent(toastType);
  return (
    <div className={classes.toastWrapper}>
      <ToastComponent isOpen={isOpen} {...toastProps} onClose={closeToast} />
    </div>
  );
};

ToastWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
