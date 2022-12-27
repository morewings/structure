import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useActions from '@/features/structure/actionCreators';
import {useDeleteNodeModal, useEditNodeModal} from '@/components/ModalManager';
import {useNodeData, useChildrenCompletion} from '@/features/structure';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';

import Stats from './Stats';
import Description from './Description';
import NodeHeader from './NodeHeader';
import NodeActions from './NodeActions';
import classes from './Node.module.css';

const Node = ({id, toggleNode, activeNode}) => {
  const isOpen = activeNode === id;
  const {isDone, title, color, generation, children: childNodes, description} = useNodeData(id);

  const completion = useChildrenCompletion(id);

  const {focusNode, toggleNodeStatus} = useActions();

  const deleteNode = useDeleteNodeModal();

  const editNode = useEditNodeModal();

  const handleSelect = () => {
    focusNode(id);
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

  const handleDelete = () => {
    deleteNode(id);
  };

  const handleEdit = () => {
    editNode(id);
  };

  return (
    <Fragment>
      <div
        className={classNames({
          [classes.node]: true,
          [classes.open]: isOpen,
        })}>
        <NodeHeader
          className={classes.header}
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
            {description && <Description text={description} />}
            <Stats
              completion={completion}
              tier={generation}
              nodeChildrenAmount={childNodes.length}
              color={color}
            />
            <NodeActions deleteNode={handleDelete} />
          </main>
        )}
        {isOpen && (
          <FooterSeparator
            leftButton={<Button icon="edit" text="Edit node" onClick={handleEdit} />}
            rightButton={<Button icon="parent_children" text="Show children" onClick={handleSelect} />}
          />
        )}
      </div>
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
