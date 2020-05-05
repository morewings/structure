import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Card, Accordion, Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import useModalLogic from 'src/components/Modals/useModalLogic';
import EditNodeModal from 'src/components/Modals/EditNode';
import classes from './Node.module.css';

const Node = ({id, title, isDone, childNodes, description}) => {
  const {addNode, focusNode, editNode} = useActions();
  const {handleShow, handleClose, isVisible} = useModalLogic();
  const handleClick = () => {
    addNode(id);
  };
  const handleSelect = () => {
    focusNode(id);
  };
  const handleEditNode = nodeFields => {
    editNode({id, ...nodeFields});
    handleClose();
  };
  return (
    <Fragment>
      <Card>
        <Card.Header>
          <input id={id} type="checkbox" onChange={() => {}} checked={isDone} />
          <h5>{title || id}</h5>
          <Accordion.Toggle as={Button} variant="link" eventKey={id}>
            Expand
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={id}>
          <Card.Body>
            <Button onClick={handleClick}>Add child</Button>
            <Button onClick={handleSelect}>Show children</Button>
            <Button onClick={handleShow}>Edit node</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {isVisible && (
        <EditNodeModal
          onSave={handleEditNode}
          node={{id, title, isDone, description}}
          id={id}
          isVisible={isVisible}
          onClose={handleClose}
        />
      )}
    </Fragment>
  );
};

Node.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  isDone: PropTypes.bool.isRequired,
  childNodes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]).isRequired,
};

Node.defaultProps = {
  title: '',
};

export default Node;
