import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useNodeData, useStructureActions} from 'src/features/structure';
import {Checkbox} from 'src/ui/Checkbox';
import {Textarea} from 'src/ui/Textarea';
import {ColorInput} from 'src/ui/ColorInput';
import {Button} from 'src/ui/Button';
import {FooterSeparator} from 'src/ui/FooterSeparator';
import {useNodeColorValues} from 'src/utils/nodeColors';
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

  const colorValue = useNodeColorValues(color);
  return (
    <div className={classes.editNode}>
      <header className={classes.header}>
        <h2>Edit node</h2> {id && <small>{id}</small>}
      </header>
      <form>
        <fieldset className={classes.fieldSet}>
          <h3 className={classes.fieldLabel}>Title</h3>
          <div className={classes.titleInputs}>
            <Checkbox
              color={colorValue}
              checked={isDone}
              onChange={setIsDone}
              className={classes.checkbox}
            />
            <Textarea value={title} onChange={setTitle} />
          </div>
        </fieldset>
        <fieldset className={classes.fieldSet}>
          <h3 className={classes.fieldLabel}>Color</h3>
          <div className={classes.colorInput}>
            <ColorInput value={color} onchange={setColor} />
          </div>
        </fieldset>
        <fieldset className={classes.fieldSet}>
          <h3 className={classes.fieldLabel}>Description</h3>
          <div className={classes.descriptionInput}>
            <Textarea
              value={description}
              onChange={setDescription}
              className={classes.textarea}
            />
          </div>
        </fieldset>
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
      </form>
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
