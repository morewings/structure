import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';
import NodeForm, {useNodeFormLogic} from '../NodeForm/NodeForm';
import useActions from '../../features/structure/actionCreators';

const EditNodeModal = ({isVisible, onClose, node: {id, ...initial}}) => {
  const {editNode} = useActions();
  const onSubmit = formValues => {
    editNode({id, ...formValues});
    onClose();
  };
  const {
    setDescription,
    setDone,
    setTitle,
    title,
    isDone,
    description,
    handleSubmit,
  } = useNodeFormLogic({onSubmit, initial});
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit node</Modal.Title>
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
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EditNodeModal;
