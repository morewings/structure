/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {Form, InputGroup} from 'react-bootstrap';

const NodeForm = ({
  description,
  title,
  isDone,
  setDone,
  setTitle,
  setDescription,
}) => {
  return (
    <Form
      autoComplete="off"
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
  )
};

NodeForm.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default NodeForm;
