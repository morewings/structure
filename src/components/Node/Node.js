import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import useModalLogic from 'src/components/Modals/useModalLogic';
import EditNodeModal from 'src/components/Modals/EditNode';
import {Checkbox} from 'src/ui/Checkbox';
import useDescendants from 'src/features/structure/useDescendants';
import useChildrenCompletion from 'src/features/structure/useChildrenCompletion';
import classes from './Node.module.css';

const Node = ({
  id,
  title,
  isDone,
  childNodes,
  description,
  color,
  toggleNode,
  activeNode,
}) => {
  const isActive = activeNode === id;
  const completion = useChildrenCompletion(id);
  const {focusNode, editNode, toggleNodeStatus} = useActions();
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
  const children = useDescendants(id);
  return (
    <Fragment>
      <div className={classes.node}>
        <header className={classes.header}>
          <Checkbox onChange={handleCheckboxChange} checked={isDone} />
          <h5>{title || id}</h5>
          <button
            onClick={handleToggle}
            type="button"
            className={classes.toggle}>
            toggle
          </button>
        </header>
        {isActive && (
          <main>
            <div>children: {children.length}</div>
            <div>completion: {completion}%</div>
            <div>color: {color}</div>
            {description && (
              <div className={classes.description}>{description}</div>
            )}
            <Button onClick={handleSelect}>Show children</Button>
            <Button onClick={handleModalShow}>Edit node</Button>
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
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  isDone: PropTypes.bool.isRequired,
  toggleNode: PropTypes.func,
  activeNode: PropTypes.string,
  childNodes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]).isRequired,
};

Node.defaultProps = {
  title: '',
  color: '',
  activeNode: '',
  toggleNode: () => {},
};

export default Node;
