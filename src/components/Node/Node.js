import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Card, Accordion, Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import useModalLogic from 'src/components/Modals/useModalLogic';
import EditNodeModal from 'src/components/Modals/EditNode';
import useDescendants from 'src/features/structure/useDescendants';
import useChildrenCompletion from 'src/features/structure/useChildrenCompletion';
import classes from './Node.module.css';

const Node = ({id, title, isDone, childNodes, description}) => {
  const completion = useChildrenCompletion(id);
  const {focusNode, editNode, toggleNodeStatus} = useActions();
  const {handleShow, handleClose, isVisible} = useModalLogic();
  const handleSelect = () => {
    focusNode(id);
  };
  const handleEditNode = nodeFields => {
    editNode({id, ...nodeFields});
    handleClose();
  };
  const handleCheckboxChange = () => {
    toggleNodeStatus({
      id,
      isDone: !isDone,
    });
  };
  const children = useDescendants(id);
  return (
    <Fragment>
      <div className={classes.node}>
        <Card>
          <Card.Header>
            <input
              id={id}
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isDone}
            />
            <h5>{title || id}</h5>
            <div>children: {children.length}</div>
            <div>completion: {completion}%</div>
            <Accordion.Toggle as={Button} variant="link" eventKey={id}>
              Expand
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>
              {description && (
                <div className={classes.description}>{description}</div>
              )}
              <Button onClick={handleSelect}>Show children</Button>
              <Button onClick={handleShow}>Edit node</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      {isVisible && (
        <EditNodeModal
          onSave={handleEditNode}
          node={{title, isDone, description}}
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
