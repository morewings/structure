import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Accordion, Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import Node from 'src/components/Node/Node';
import Modal from 'src/components/Modals/CreateNode';
import classes from './Column.module.css';

const getChildren = (id, state) =>
  state.structure.nodes[id].children.map(
    childId => state.structure.nodes[childId]
  );

const Column = ({nodeId}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => setIsVisible(false);
  const handleShow = () => setIsVisible(true);
  const columnData = useSelector(state => state.structure.nodes[nodeId]);
  const nodes = useSelector(state => getChildren(nodeId, state));
  const {addNode} = useActions();
  const handleClick = () => {
    handleShow();
  };
  const handleNodeSubmit = ({description, title, isDone}) => {
    console.log('column', description, title, isDone)
    addNode({parentId: nodeId, description, title, isDone});
    handleClose();
  };
  return (
    <Fragment>
      <div className={classes.column}>
        <header>{columnData.title || columnData.id}</header>
        <Accordion>
          {nodes.map(({id, title, isDone, children}) => (
            <Node
              id={id}
              title={title}
              isDone={isDone}
              key={id}
              childNodes={children}
            />
          ))}
        </Accordion>
        <div className={classes.add}>
          <Button onClick={handleClick}>Add node</Button>
        </div>
      </div>
      <Modal
        onSubmit={handleNodeSubmit}
        isVisible={isVisible}
        onClose={handleClose}
      />
    </Fragment>
  );
};

Column.propTypes = {
  nodeId: PropTypes.string,
};

Column.defaultProps = {
  nodeId: 'node_initial',
};

export default Column;
