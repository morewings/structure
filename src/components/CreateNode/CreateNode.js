import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useStructureActions} from 'src/features/structure';
import NodeFieldset from 'src/ui/NodeFieldset';
import {Button} from 'src/ui/Button';
import {FooterSeparator} from 'src/ui/FooterSeparator';
import classes from 'src/components/CreateNode/CreateNode.module.css';

const CreateNode = ({onCloseModal, parentId}) => {
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
      <FooterSeparator
        leftButton={
          <Button
            type="danger"
            icon="cancel"
            text="Cancel"
            onClick={onCloseModal}
          />
        }
        rightButton={
          <Button
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

CreateNode.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default CreateNode;
