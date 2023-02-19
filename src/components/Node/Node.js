import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {useStructureActions} from '@/features/structure';
import {useNodeData, useChildrenCompletion} from '@/features/structure';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';
import {PieChart} from '@/components/PieChart';
import {useInfoToast} from '@/components/InfoToast';
import {useDeleteNodeModal} from '@/components/ConfirmationDeleteNode';
import {useEditNodeModal} from '@/components/EditNode';

import {Ancestry} from './Ancestry';
import Description from './Description';
import NodeHeader from './NodeHeader';
import NodeActions from './NodeActions';
import classes from './Node.module.css';

const Node = ({id, toggleNode, activeNode}) => {
  const isOpen = activeNode === id;
  const {isDone, title, color, generation, children: childNodes, description} = useNodeData(id);

  const completion = useChildrenCompletion(id);

  const {focusNode, toggleNodeStatus} = useStructureActions();

  const showDeleteConfirmation = useDeleteNodeModal();

  const editNode = useEditNodeModal();

  const showToast = useInfoToast();

  const handleSelect = () => {
    focusNode(id);
    showToast({text: `Node "${title || id}" was expanded`});
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
    showDeleteConfirmation(id);
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
            <div className={classes.stats}>
              <PieChart color={color} completion={completion} />
              <Ancestry tier={generation} nodeChildrenAmount={childNodes.length} />
            </div>
            <NodeActions deleteNode={handleDelete} />
          </main>
        )}
        {isOpen && (
          <FooterSeparator
            leftButton={<Button icon="edit" text="Edit" onClick={handleEdit} />}
            rightButton={<Button icon="parent_children" text="Expand" onClick={handleSelect} />}
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
