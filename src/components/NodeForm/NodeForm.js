import React from 'react';
import PropTypes from 'prop-types';
import {Form, InputGroup} from 'react-bootstrap';

const NodeForm = ({
  description,
  title,
  color,
  isDone,
  setDone,
  setTitle,
  setDescription,
  setColor,
}) => (
  <Form
    autoComplete="off"
    onSubmit={e => {
      e.preventDefault();
    }}>
    <Form.Group controlId="nodeTitle">
      <Form.Label>Enter title for this Node:</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Checkbox
            onChange={e => {
              setDone(e.target.checked);
            }}
            checked={isDone}
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
    <Form.Group controlId="nodeColor">
      <Form.Label>Enter description for this Node:</Form.Label>
      <Form.Control
        onChange={e => {
          setColor(e.target.value);
        }}
        value={color}
        as="select"
        custom>
        <option value="no color">no color</option>
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="violet">violet</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="nodeDescription">
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
  color: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default NodeForm;
