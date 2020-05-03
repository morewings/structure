import React from 'react';
import PropTypes from 'prop-types';
import {Card, Accordion, Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import classes from './Node.module.css';

const Node = ({id, title, done, childNodes}) => {
  const {addNode, focusNode} = useActions();
  const handleClick = () => {
    addNode(id);
  };
  const handleSelect = () => {
    focusNode(id);
  };
  return (
    <Card>
      <Card.Header>
        <input id={id} type="checkbox" checked={done} />
        <h5>{title || id}</h5>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Expand
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Button onClick={handleClick}>Add child</Button>
          <Button onClick={handleSelect}>Show children</Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

Node.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  done: PropTypes.bool.isRequired,
  childNodes: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]).isRequired,
};

Node.defaultProps = {
  title: '',
};

export default Node;