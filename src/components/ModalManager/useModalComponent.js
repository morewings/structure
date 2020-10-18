import Confirmation from 'src/components/Confirmation';

const useModalComponent = modalType =>
  ({CONFIRMATION: Confirmation}[modalType]);

export default useModalComponent;
