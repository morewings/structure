import PropTypes from 'prop-types';

import {useToastActions, useToastInfo} from '@/features/toast';

import {useToastComponent} from './useToastComponent';
import classes from './Toast.module.css';

export const Toast = ({id}) => {
  const {closeToast} = useToastActions();
  const {toastType, toastProps} = useToastInfo(id);
  const ToastComponent = useToastComponent(toastType);
  const handleClose = () => {
    closeToast(id);
  };
  return (
    <div className={classes.toast}>
      <ToastComponent {...toastProps} onClose={handleClose} />
    </div>
  );
};

Toast.propTypes = {
  id: PropTypes.string.isRequired,
};
