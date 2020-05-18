import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Accordion, Button} from 'react-bootstrap';
import Node from 'src/components/Node/Node';
import useModalLogic from 'src/components/Modals/useModalLogic';
import CreateNodeModal from 'src/components/Modals/CreateNode';
import classes from './Column.module.css';
import useActions from '../../features/structure/actionCreators';

const getChildren = (id, state) =>
  state.structure.nodes[id].children.map(
    childId => state.structure.nodes[childId]
  );

const Column = ({nodeId, role}) => {
  const {handleShow, handleClose, isVisible} = useModalLogic();
  const {addNode} = useActions();
  const columnData = useSelector(state => state.structure.nodes[nodeId]);
  const nodes = useSelector(state => getChildren(nodeId, state));
  const handleClick = () => {
    handleShow();
  };
  const handleCreateNode = nodeFields => {
    addNode({parentId: nodeId, ...nodeFields});
    handleClose();
  };
  return (
    <Fragment>
      <div className={classes.column}>
        <header>
          <div>{role}</div>
          <div>{columnData.title || columnData.id}</div>
        </header>
        <div className={classes.nodes}>
          <Accordion>
            {nodes.map(({id, title, isDone, children, description, color}) => (
              <Node
                id={id}
                title={title}
                color={color}
                description={description}
                isDone={isDone}
                key={id}
                childNodes={children}
              />
            ))}
          </Accordion>
        </div>
        <footer>
          <div className={classes.add}>
            <Button onClick={handleClick}>Add node</Button>
          </div>
        </footer>
      </div>
      {isVisible && (
        <CreateNodeModal
          onSave={handleCreateNode}
          parentId={nodeId}
          isVisible={isVisible}
          onClose={handleClose}
        />
      )}
    </Fragment>
  );
};

Column.propTypes = {
  nodeId: PropTypes.string,
  role: PropTypes.string.isRequired,
};

Column.defaultProps = {
  nodeId: 'node_initial',
};

export default Column;
