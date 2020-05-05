import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import {NodeForm, useNodeFormLogic} from 'src/components/NodeForm';

const CreateNodeModal = ({isVisible, onClose, onSave}) => {
  const {
    setDescription,
    setDone,
    setTitle,
    title,
    isDone,
    description,
    handleSubmit,
  } = useNodeFormLogic({onSubmit: onSave});
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create node</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NodeForm
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
          Dismiss
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Node
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateNodeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CreateNodeModal;
