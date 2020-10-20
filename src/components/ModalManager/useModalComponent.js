import {CONFIRMATION_DELETE} from 'src/features/modal';
import ConfirmationDelete from 'src/components/ConfirmationDelete';

const useModalComponent = modalType =>
  ({[CONFIRMATION_DELETE]: ConfirmationDelete}[modalType]);

export default useModalComponent;
