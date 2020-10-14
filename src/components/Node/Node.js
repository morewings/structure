import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useActions from 'src/features/structure/actionCreators';
import useModalLogic from 'src/components/Modals/useModalLogic';
import EditNodeModal from 'src/components/Modals/EditNode';
import {useNodeData, useChildrenCompletion} from 'src/features/structure';
import Stats from './Stats';
import Description from './Description';
import NodeHeader from './NodeHeader';
import NodeFooter from './NodeFooter';
import NodeActions from './NodeActions';
import classes from './Node.module.css';

const Node = ({id, toggleNode, activeNode}) => {
  const isOpen = activeNode === id;
  const {
    isDone,
    title,
    color,
    generation,
    children: childNodes,
    description,
  } = useNodeData(id);
  const completion = useChildrenCompletion(id);
  const {focusNode, editNode, toggleNodeStatus, deleteNode} = useActions();
  const {isModalVisible, handleModalClose, handleModalShow} = useModalLogic();
  const handleSelect = () => {
    focusNode(id);
  };
  const handleEditNode = nodeFields => {
    editNode({id, ...nodeFields});
    handleModalClose();
  };
  const handleCheckboxChange = () => {
    toggleNodeStatus({
      id,
      isDone: !isDone,
    });
  };
  const handleToggle = () => {
    toggleNode(id);
  };
  return (
    <Fragment>
      <div
        className={classNames({
          [classes.node]: true,
          [classes.open]: isOpen,
        })}>
        <NodeHeader
          handleToggle={handleToggle}
          isOpen={isOpen}
          title={title}
          color={color}
          handleCheckboxChange={handleCheckboxChange}
          isDone={isDone}
          id={id}
        />
        {isOpen && (
          <main>
            <Stats
              completion={completion}
              tier={generation}
              nodeChildrenAmount={childNodes.length}
            />
            {description && <Description description={description} />}
            <NodeFooter
              handleModalShow={handleModalShow}
              handleSelect={handleSelect}
            />
            <NodeActions deleteNode={deleteNode} id={id} />
          </main>
        )}
      </div>
      {isModalVisible && (
        <EditNodeModal
          onSave={handleEditNode}
          node={{title, isDone, description}}
          id={id}
          isVisible={isModalVisible}
          onClose={handleModalClose}
        />
      )}
    </Fragment>
  );
};

Node.propTypes = {
  id: PropTypes.string.isRequired,
  toggleNode: PropTypes.func,
  activeNode: PropTypes.string,
};

Node.defaultProps = {
  activeNode: '',
  toggleNode: () => {},
};

export default Node;
