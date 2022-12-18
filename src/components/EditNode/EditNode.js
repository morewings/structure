import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {useNodeData, useStructureActions} from '@/features/structure';
import NodeFieldset from '@/ui/NodeFieldset';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';

import classes from './EditNode.module.css';

const EditNode = ({id, onCloseModal}) => {
  const nodeData = useNodeData(id);
  const [isDone, setIsDone] = useState(nodeData.isDone);
  const [title, setTitle] = useState(nodeData.title);
  const [color, setColor] = useState(nodeData.color);
  const [description, setDescription] = useState(nodeData.description);

  const {editNode} = useStructureActions();

  const handleEdit = () => {
    editNode({id, description, color, isDone, title});
    onCloseModal();
  };

  return (
    <div className={classes.editNode}>
      <main className={classes.main}>
        <header className={classes.header}>
          <h2>Edit node</h2> {id && <small>{id}</small>}
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

EditNode.propTypes = {
  id: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
};

EditNode.defaultProps = {
  id: '',
};

export default EditNode;
