import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Accordion} from 'react-bootstrap';
import {Accordion as AccordionUI} from 'src/components/Accordion';
import Node from 'src/components/Node/Node';
import useModalLogic from 'src/components/Modals/useModalLogic';
import CreateNodeModal from 'src/components/Modals/CreateNode';
import {Icon} from 'src/ui/Icon';
import {Button} from 'src/ui/Button';
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
          <Icon className={classes.icon} name={role} />
          <div className={classes.text}>{role}</div>
        </header>
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
        <footer>
          {role === 'siblings' && (
            <div className={classes.focus}>
              <Button
                text="Focus active"
                icon="focus"
                onClick={() => {
                  console.log('trying to focus');
                }}
              />
            </div>
          )}
          <div className={classes.add}>
            <Button text="Add node" icon="add-node" onClick={handleClick} />
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
