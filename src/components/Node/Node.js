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
  const icon = isActive ? 'collapse' : 'expand';
  return (
    <Fragment>
      <div
        className={classNames({
          [classes.node]: true,
          [classes.active]: isActive,
        })}>
        <header className={classes.header}>
          <Checkbox
            className={classes.checkbox}
            onChange={handleCheckboxChange}
            checked={isDone}
          />
          <h5 className={classes.title}>{title || id}</h5>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
          <div onClick={handleToggle} role="button">
            <Icon className={classes.toggleIcon} color={color} name={icon} />
          </div>
        </header>
        {isActive && (
          <main>
            <div className={classes.stats}>
              <h3>Stats</h3>
              <div className={classes.chart}>{completion}</div>
              <div>
                <div className={classes.tier}>
                  <h4>Tier</h4>
                  <div className={classes.amount}>4th</div>
                </div>
                <div className={classes.ancestors}>
                  <h4>Ancestors</h4>
                  <div className={classes.amount}>{children.length}</div>
                </div>
              </div>
            </div>
            {description && (
              <div className={classes.description}>
                <h3>Description</h3>
                <div className={classes.text}>{description}</div>
              </div>
            )}
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
                  console.log('delete');
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
