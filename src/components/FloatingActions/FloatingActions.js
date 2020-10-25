import React from 'react';
import {saveAs} from 'file-saver';
import {ButtonBig} from 'src/ui/ButtonBig';
import {ButtonUpload} from 'src/ui/ButtonUpload';
import {
  useFocusedParentId,
  useStructureActions,
  useStructure,
} from 'src/features/structure';
import {
  useDeleteStructureModal
} from 'src/components/ModalManager';
import readFile from 'src/utils/readFile';
import createBlobFromString from 'src/utils/createBlobFromString';
import classes from './FloatingActions.module.css';

const FloatingActions = () => {
  const parentId = useFocusedParentId();

  const {focusNode, replaceStructure} = useStructureActions();

  const {focusInitialNode} = useStructureActions();

  const handleFocusParent = () => {
    focusNode(parentId);
  };

  const handleFileUpload = async ([file]) => {
    const structure = await readFile(file);
    structure && replaceStructure(structure);
  };

  const structure = useStructure();

  const handleSave = () => {
    const state = JSON.stringify(structure, null, 2);
    saveAs(createBlobFromString(state), 'structure.json');
  };

  const handleDelete = useDeleteStructureModal();

  return (
    <div className={classes.floatingActions}>
      <ButtonBig
        onClick={handleFocusParent}
        title="Focus parent"
        className={classes.button}
        icon="rewind"
      />
      <ButtonBig
        onClick={focusInitialNode}
        title="Focus initial node"
        className={classes.button}
        icon="full_rewind"
      />
      <div className={classes.divider} />
      <ButtonUpload
        className={classes.button}
        title="Upload structure json file"
        onUpload={handleFileUpload}
      />
      <ButtonBig
        onClick={handleSave}
        title="Save structure json file"
        type="confirm"
        className={classes.button}
        icon="download"
      />
      <ButtonBig
        onClick={handleDelete}
        title="Delete structure tree"
        type="danger"
        className={classes.button}
        icon="delete_forever"
      />
    </div>
  );
};

export default FloatingActions;
