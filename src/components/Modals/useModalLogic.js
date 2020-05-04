import {useState} from 'react';

const useModalLogic = (isOpen = false) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const handleClose = () => setIsVisible(false);
  const handleShow = () => setIsVisible(true);
  return {
    isVisible,
    handleClose,
    handleShow,
  };
};

export default useModalLogic;
