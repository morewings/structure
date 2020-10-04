import {useState} from 'react';

const useModalLogic = (isOpen = false) => {
  const [isModalVisible, setIsModalVisible] = useState(isOpen);
  const handleModalClose = () => setIsModalVisible(false);
  const handleModalShow = () => setIsModalVisible(true);
  return {
    isModalVisible,
    handleModalClose,
    handleModalShow,
  };
};

export default useModalLogic;
