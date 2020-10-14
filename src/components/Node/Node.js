import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useActions from 'src/features/structure/actionCreators';
import useModalLogic from 'src/components/Modals/useModalLogic';
import EditNodeModal from 'src/components/Modals/EditNode';
import {Checkbox} from 'src/ui/Checkbox';
import {Button} from 'src/ui/Button';
import useDescendants from 'src/features/structure/useDescendants';
import useChildrenCompletion from 'src/features/structure/useChildrenCompletion';
import {Icon} from 'src/ui/Icon';
import Stats from './Stats';
import Description from './Description';
import NodeHeader from './NodeHeader';
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
  generation,
}) => {
  const isOpen = activeNode === id;
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
            <footer className={classes.footer}>
              <div className={classes.edit}>
                <Button
                  icon="edit"
                  text="Edit node"
                  onClick={handleModalShow}
                />
              </div>
              <div className={classes.showChildren}>
                <Button
                  icon="parent_children"
                  text="Show children"
                  onClick={handleSelect}
                />
              </div>
            </footer>
            <div className={classes.actions}>
              <Button
                className={classes.iconButton}
                icon="drag_handle"
                onClick={() => {
                  console.log('drag');
                }}
              />
              <Button
                className={classes.iconButton}
                icon="delete"
                onClick={() => {
                  deleteNode(id);
                }}
              />
            </div>
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
  generation: PropTypes.number.isRequired,
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
