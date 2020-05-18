import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import {NodeForm, useNodeFormLogic} from '../NodeForm';

const EditNodeModal = ({isVisible, onClose, onSave, node}) => {
  const {
    setDescription,
    setDone,
    setTitle,
    title,
    isDone,
    description,
    handleSubmit,
    color,
    setColor,
  } = useNodeFormLogic({onSubmit: onSave, node});
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit node</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NodeForm
          color={color}
          setColor={setColor}
          description={description}
          isDone={isDone}
          setDescription={setDescription}
          setDone={setDone}
          setTitle={setTitle}
          title={title}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Node
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditNodeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditNodeModal;
