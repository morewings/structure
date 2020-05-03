import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Form, InputGroup} from 'react-bootstrap';

const CreateNodeModal = ({isVisible, onClose, onSubmit}) => {
  const [isDone, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create node</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={e => {
            e.preventDefault();
            console.log(description,
              title,
              isDone,)
            onSubmit({
              description,
              title,
              isDone,
            });
          }}>
          <Form.Group controlId="creatNodeTitle">
            <Form.Label>Enter title for this Node:</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Checkbox
                  onChange={e => {
                    setDone(e.target.value);
                  }}
                  value={isDone}
                />
              </InputGroup.Prepend>
              <Form.Control
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Enter title for this Node..."
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="creatNodeDescription">
            <Form.Label>Enter description for this Node:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
              placeholder="Enter description for this Node..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onSubmit({
              description,
              title,
              isDone,
            });
          }}>
          Save Node
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateNodeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateNodeModal;
