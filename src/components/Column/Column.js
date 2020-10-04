import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import config from 'src/config';
import {Accordion} from 'src/components/Accordion';
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
  const {isModalVisible, handleModalClose, handleModalShow} = useModalLogic();
  const {addNode} = useActions();
  const columnData = useSelector(state => state.structure.nodes[nodeId]);
  const nodes = useSelector(state => getChildren(nodeId, state));
  const handleClick = () => {
    handleModalShow();
  };
  const handleCreateNode = nodeFields => {
    addNode({parentId: nodeId, ...nodeFields});
    handleModalClose();
  };
  return (
    <Fragment>
      <div className={classes.column}>
        <header className={classes.header}>
          <Icon className={classes.icon} name={role} />
          <div className={classes.text}>{role}</div>
        </header>
        <Accordion className={classes.nodes} id={nodeId}>
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
        <footer className={classes.footer}>
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
      {isModalVisible && (
        <CreateNodeModal
          onSave={handleCreateNode}
          parentId={nodeId}
          isVisible={isModalVisible}
          onClose={handleModalClose}
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
  nodeId: config.initialNode,
};

export default Column;
