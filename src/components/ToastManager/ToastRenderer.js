import PropTypes from 'prop-types';

import {useToastActions, useToastInfo} from '@/features/toast';

import {useToastComponent} from './useToastComponent';
import classes from './ToastRenderer.module.css';

export const ToastRenderer = ({id, isOpen}) => {
  const {closeToast} = useToastActions();
  const {toastType, toastProps} = useToastInfo(id);
  const ToastComponent = useToastComponent(toastType);
  const handleClose = () => {
    closeToast(id);
  };
  return (
    <div className={classes.toastContainer}>
      <ToastComponent {...toastProps} onClose={handleClose} />
    </div>
  );
};

ToastRenderer.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
