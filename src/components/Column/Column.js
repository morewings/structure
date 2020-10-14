import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import config from 'src/config';
import {useActions, useChildrenIdList} from 'src/features/structure';
import {Accordion} from 'src/components/Accordion';
import Node from 'src/components/Node/Node';
import useModalLogic from 'src/components/Modals/useModalLogic';
import CreateNodeModal from 'src/components/Modals/CreateNode';
import {Icon} from 'src/ui/Icon';
import {Button} from 'src/ui/Button';
import classes from './Column.module.css';

const getChildren = (id, state) =>
  state.structure.nodes[id].children.map(
    childId => state.structure.nodes[childId]
  );

const Column = ({nodeId, role}) => {
  const {isModalVisible, handleModalClose, handleModalShow} = useModalLogic();
  const {addNode} = useActions();
  // TODO: refactor to use only ids array
  const nodes = useSelector(state => getChildren(nodeId, state));
  const nodes2 = useChildrenIdList(nodeId);
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
          {nodes2.map(id => (
            <Node id={id} key={id} />
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
