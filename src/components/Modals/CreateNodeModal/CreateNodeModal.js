import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {useStructureActions} from '@/features/structure';
import NodeFieldset from '@/ui/NodeFieldset';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';

import classes from './CreateNodeModal.module.css';

export const CreateNodeModal = ({onCloseModal, parentId}) => {
  const [isDone, setIsDone] = useState(false);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('gray');
  const [description, setDescription] = useState('');

  const {addNode} = useStructureActions();

  const handleEdit = () => {
    addNode({description, color, isDone, title, parentId});
    onCloseModal();
  };

  return (
    <div className={classes.createNode}>
      <main className={classes.main}>
        <header className={classes.header}>
          <h2>Create node</h2>
        </header>
        <NodeFieldset
          color={color}
          title={title}
          description={description}
          isDone={isDone}
          setColor={setColor}
          setIsDone={setIsDone}
          setTitle={setTitle}
          setDescription={setDescription}
        />
      </main>
      <FooterSeparator
        leftButton={
          <Button
            className={classes.button}
            type="danger"
            icon="cancel"
            text="Cancel"
            onClick={onCloseModal}
          />
        }
        rightButton={
          <Button
            className={classes.button}
            type="confirm"
            icon="save"
            text="Save node"
            onClick={handleEdit}
          />
        }
      />
    </div>
  );
};

CreateNodeModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};
