import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Form, InputGroup} from 'react-bootstrap';

export const useNodeFormLogic = ({onSubmit, initial = {}}) => {
  const [isDone, setDone] = useState(initial.isDone || false);
  const [title, setTitle] = useState(initial.title || '');
  const [description, setDescription] = useState(initial.description || '');
  const flushValues = () => {
    setDone(false);
    setTitle('');
    setDescription('');
  };
  const handleSubmit = useCallback(() => {
    onSubmit({
      description,
      title,
      isDone,
    });
    flushValues();
  }, [description, isDone, onSubmit, title]);
  return {
    isDone,
    setDone,
    title,
    setTitle,
    description,
    setDescription,
    handleSubmit,
  };
};

const NodeForm = ({
  description,
  title,
  isDone,
  setDone,
  setTitle,
  setDescription,
}) => (
  <Form
    autocomplete="off"
    onSubmit={e => {
      e.preventDefault();
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
);

NodeForm.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default NodeForm;
